---
title: NextJS Fundamentals
date: 2025-12-26 21:37:00 +0100
categories: [Web_Development]
tags: [nextjs]     # TAG names should always be lowercase
---

This is a cheatsheet of stuff mentioned in the [JSM crash course](https://youtu.be/wm5gMKuwSYk) 

## Rendering
NextJS allows for the fast rendering of the site.
We can achive this very easily.
Components are server-side rendered by default.
And if we want the component to use client-side rendering we just add `'use client'` at the beginning of a file. 

## Routing
First of all, lets look at how we would implement routing in React, 
and then we will introduce how this process was simplified in NextJS.

### Routing in React
To implement routing in React we have to import additional 
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

```

### Routing in NextJS
Routing in NextJS is handled by the file system.
Each folder in `app` directory becomes a route and it's name becomes the routes path.
There is no need for additional packages.
To visualize it better:

```javascript
- app
    - blog // https://localhost:3000/blog
    - about // https://localhost:3000/about
    - profile // https://localhost:3000/profile
    - services // https://localhost:3000/services
```

### Nested Routing in React
Again to implement nested routing we need to import additional packages.

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} >
                    <Route path="new" element={<NewPost />} /> {/*Nested route!*/}
                </Route>
            </Routes>
        </Router>
    );
}
```

### Nested Routing in NextJS
In NextJS the nested routing is implemented by nestring directories.

```javascript
- app
    - home
    - about
    - posts
        - new
            |
            |- page.js
```

### Dynamic Routing in React

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import Post from './pages/Post';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} >
                    <Route path="new" element={<NewPost />} /> {/*Nested route!*/}
                    <Route path=":postId" element={<Post /> } /> {/*Dynamic route!*/}
                </Route>
            </Routes>
        </Router>
    );
}
```

### Dynamic Routing in NextJS
If we wanted to implement dynamic routing in NextJS, we would have to create a new directory with name wrapped with `[]`.

```javascript
- app
    - home
    - about
    - posts
        - new
        - [postId]
            |
            |- page.js
```

Now if we would like to, we can access dynamic variable in the `page.js` file.

```javascript
import React from 'react';

const page = () => {
    return (
        <div>{postId}</div>
    );
}

export default page;
```

## Fullstack - Serverless APIs
We can create API endpoints simply by creating `route.js` file in some directory that corresponds to the route API endpoint.

```javascript
- app
    - blog
        |
        |- route.js
    - about
        |
        |- route.js
    - profile
        |
        |- route.js
    - services
        |
        |- route.js
```

## Create new project
To create a new NextJS project we simply execute `npx create-next-app@latest <directory>`.

## Common NextJS Files
`layout.js` is a file that defines layout that shares components in child pages.
You can also create them in the subfolders for example in `/posts` and define layout for every single post.

`page.js` is a file that defines a page that represents home page route of the application.

`globals.css` is a file that stores global css styles of the entire application.

`loading.js` is a file that is shown while `page.js` is being loaded.

`error.js` is a file that shows whenever an error occurs.
An example of an `error.js` file implementation would be:
```javascript
'use client' // Error components must be Client componenets.

import { useEffect } from 'react';

const Error = ({ error, reset }) => {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
            }>Try again</button>
        </div>
    );
}
```

## Data Fetching

### Server Side Rendering (SSR)
It ensures that the data is fetched every single time. It should be used for data that can frequently change.

```javascript
async function Page ({ params }) {
    const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${params.id}`,
       { cache: 'no-store' } 
    );
    const data = await res.json()

    return (
        <div className="grid grid-cols-6 gap-x-6 gap-x-3">
            <div className="col-span-full space-y-3 lg:col-span-4">
               <h1 className="truncate text-2x1 font-medium capitalize text-gray-200">
                    {data.title} 
               </h1>
               <p className="font-medium text-gray-500">{data.body}</p>
            </div>
        </div>
    )
}
```
### Static Site Generation (SSG)
It is ideal for data that doesn't change frequently, because it is stored in cache memory.
The only difference in the code is deleted line with `{ cache: 'no-store' }`.

```javascript
async function Page ({ params }) {
    const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = await res.json()

    return (
        <div className="grid grid-cols-6 gap-x-6 gap-x-3">
            <div className="col-span-full space-y-3 lg:col-span-4">
               <h1 className="truncate text-2x1 font-medium capitalize text-gray-200">
                    {data.title} 
               </h1>
               <p className="font-medium text-gray-500">{data.body}</p>
            </div>
        </div>
    )
}
```

### Incremental Static Regeneration (ISR)
Instead of passing argument that disables storing data in cache `{ cache: 'no-store' }`,
we can pass other parameter `{ next: { revalidate: 10 } }`, that specifies time-frame,
after which the data will be cached. It is refreshed and you always have the new data - making it ideal for dynamic generation.

```javascript
async function Page ({ params }) {
    const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${params.id}`,
       { next: { revalidate: 10 } }
    );
    const data = await res.json()

    return (
        <div className="grid grid-cols-6 gap-x-6 gap-x-3">
            <div className="col-span-full space-y-3 lg:col-span-4">
               <h1 className="truncate text-2x1 font-medium capitalize text-gray-200">
                    {data.title} 
               </h1>
               <p className="font-medium text-gray-500">{data.body}</p>
            </div>
        </div>
    )
}
```

## Handling API Requests
NextJS makes full-stack web development way easier.
Without NextJS we would typicaly use `Express.js`.

### Handling API Requests in Express.js

```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    // Handle GET request for /api/users
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ];

    // Send the users as a response
    res.json(users);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```

### Handling API Requests in NextJS
To create a api route you just create `route.js` file in directory you want.
However there `route.js` file cannot interfere with `page.js` files.
If you need to create an API route with the same path as the `page.js` file path,
you would define `route.js` in `/app/api` directory, therefore NextJS knows what to work on.

We would implement same stuff as in `Express.js` above.
We define `route.js` file in `/app/api/users` directory.
The api endpoint would be `http://localhost:3000/api/users`.

```javascript
export async function GET(request) {
    // Handle GET request for /api/users
    // Retrieve users from the database or any data source
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ];

    // Send the users as a response
    return new Response(JSON.stringify(users))
}
```

NextJS supports the following HTTP methods:
1. **GET**: Retrieves data or resources from the server.
2. **POST**: Submits data to the server to create a new resource.
3. **PUT**: Updates or replaces an existing resource on the server.
4. **PATCH**: Partially updates an existing resource on the server.
5. **DELETE**: Removes a specific resource from the server.
6. **HEAD**: Retrieves the headers of a resource without fetching its body.
7. **OPTIONS**: Retrieves the supported HTTP methods and other communication options for a resource.

## Defining Metadata In NextJS
NextJS metadata API allows for defining static and dynamic metadata.
### Static Metadata

```javascript
export const metadata = {
    title: 'Home',
};
// Output:
// <head>
//      <title>Home</title>
// </head>

export default function Page() {
    return (
        <h1>My Normal Next.js Page with Static Metadata</h1>
    )
}
```

### Dynamic Metadata

```javascript
export async function generateMetadata({ params, searchParams }) {
    const product = await getProduct(params.id);
    return { title: product.title };
}
// Output:
// <head>
//      <title>My Unique Product</title>
// </head>

export default function Page() {
    return (
        <h1>My Normal Next.js Page with Dynamic Metadata</h1>
    )
}
```

## Additional packages
You can `npm install`:
`bcrypt` for password hashing
`mongodb` for mongodb database
`mongoose` for managing mongodb database
`next-auth` for authentication