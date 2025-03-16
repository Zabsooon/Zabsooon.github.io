---
title: Web Dev Notes from The Odin Project
date: 2025-01-01 12:00:00 +0100
categories: [Web_Development]
tags: [html, css]
---

This blog post is my approach on [The Odin Project](https://www.theodinproject.com) **HTML** and **CSS** modules, both Intermedie and Advanced.

## Resources

### Uncategorized

- For viewing http codes [httpbin.org](http://httpbin.org/#/)

### CSS

- [Flexbox cheatsheet](https://flexbox.malven.co/)
- [Flexbox in practice](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

- There are also some notes about it below, but you can check [MDN CSS Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- You can test your attribute selecting skills [here](https://flukeout.github.io/#)
- [MDN CSS Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [MDN CSS Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [MDN CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#inheritance_of_custom_properties)

- Styling radio buttons and checkboxes [MDN accent-color](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color)
- [Stylin checkboxes in pure CSS guide](https://moderncss.dev/pure-css-custom-checkbox-style/)

-[MDN Basic Concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
-[MDN Line-based Placement with CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
-[Interactive Guide to Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)

### JavaScript

-[Prototype Inheritance](https://javascript.info/prototype-inheritance)
-[JavaScript Design Patterns](https://www.patterns.dev/)


#### OOP

-[Getters and Setters](https://javascript.info/property-accessors)
-[Class syntax](https://javascript.info/class)
-[Extending classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
-[Private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
-[Static properties and methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

## My Notes
If you want to learn from me,
here are my notes when I summarize the knowledge,
I found the most usefull.

### CSS

#### Flexbox

Straight to the point lets just discuss styling properties.
`flex: 1` property is a setting for `flex-grow: 1`, `flex-shrink: 1` and `flex-basis: 0`.
So `flex: 1` is equivallent of `flex: 1 1 0`.

`flex-grow` specifies how much the item will grow compared to the others.
`flex-shrink` specifies how much the item will shrink compared to the others, to fit to the parent container. It is applied when the size of the parent container is too small to fit the rest.
`flex-basis` (the default value is `auto`) sets the starting size of an item.

`flex-direction` is a property that sets the direction of 'flexing'.
There are 2 directions that the items can scale in:
- `row`
- `column`

These are key concepts and you can find more in the resources.

#### SVGs

**SVG** stands for *Scalable Vector Graphics* and they are defined by mathematical vectors and can be modified using *CSS* and *JavaScript*. They are usefull for:
- Icons
- Graphs/Charts
- Large, simple images
- Patterned backgrounds
- Applying effects to other elements via SVG filters

They are written in **XML** (*Extensible Markup Language*) they can be interacted with [Element WebAPI](https://developer.mozilla.org/en-US/docs/Web/API/Element)

#### Child and sibling combinators
This is strictly from [The Odin Project](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-selectors),
I decided to add it here because it is somewhat more intermediate CSS and I think it is usefull.

So given the structure of HTML
```html
<main class="parent">
    <div class="child group1">
        <div class="grand-child group1"></div>
    </div>
    <div class="child group2">
        <div class="grand-child group2"></div>
    </div>
    <div class="child group3">
        <div class="grand-child group3"></div>
    </div>
</main>
```

To apply styling to all `div`'s in `main` we can use descendant combinator

```css
main div {
    /* Styling */
}
```

There are 3 more usefull combinators:

- `>` the child combinator

```css
/* The divs with class `child` will be affected */
main > div {
    /* Styling */
}

/* The divs with class `grand-child` will be affected */
main > div > div {
    /* Styling */
}

```

- `+` the adjacent sibling combinator

```css
/* Only the div with classes `child group2` will be affected */
.group1 + div {
    /* Styling */
}

/* Only the div with classes `child group3` will be affected */
.group1 + div + div {
    /* Styling */
}
```

- `~` the general sibling combinator

```css
/* All of .group1's div siblings will be affected */
.group1 ~ div {
    /* Styling */
}
```

#### Attribute selectors
You can style elements with different attributes, there are many ways you can do it

- `[attribute]` selects anything where the given attribute exists.

```css
/* All elements with src attribute */
[src] {
    /* Styling */
}
```

- `selector[attribute]` selects combination of selector with an attribute.

```css
/* All img elements with attribute `src` */
img[src] {
    /* Styling */
}
```

- `[attribute="value"]` selects anything with exact attribute.

```css
/* All img elements with attribute `src="puppy.jpg"` */
img[src="puppy.jpg"] {
    /* Styling */
}
```

- `[attribute^="value"]` - `^=` Will match strings from the start.

```css
/* Any class that begins with aus. */
[class^='aus'] {
    /* Styling */
}
```

- `[attribute$="value"]` - `$=` Will match strings from the end.

```css
/* Any src attribute that ends in .jpg */
[src$='.jpg'] {
    /* Styling */
}
```

- `[attribute*="value"]` - `*=` The wildcard selector will match anywhere inside the string.

```css
/* Any atribute with substring ill inside it */
[for*='ill'] {
    /* Styling */
}
```

### JavaScript

Honestly I am not a big fan of JavaScript, because the language itself is a mess for me,
but it was created in 10 days by one guy, so it is obvious it's not going to be perfect.
JavaScript took over the world and is perfect for the web - it is what it was originally made for.
I honestly am more of a strictly typed langagues guy, and TypeScript is going to be something
I am going to learn for sure.
Sometimes when codebase becomes to big,
you just don't know what is going on and TypeScript fixes that.
But for now I need a refresher on JavaScript itself...

#### Data types

JavaScript has 8 data types, 7 of them are primitive:
- `string`
- `number`
- `boolean`
- `bigint`
- `symbol`
- `null`
- `undefined`

There is also one more data type, `Object`.

One key difference, between primitives and object data types is that we can create objects,
that will be a `refernce` to the original object here is an example:

```js
    // Using primitives:
    let primitive = 0;
    let primitiveCopy = primitive;

    primitiveCopy = 10;

    console.log(primitive); // 0
    console.log(primitiveCopy); // 10
    // Using objects:
    const obj = { data: 0 };
    const objCopy = obj;

    objCopy.data = 10;

    console.log(obj); // { data: 10 }
    console.log(objCopy); // { data: 10 }
```

> An object passed as an argument to a function is also passed through reference.

#### Usefull methods

There are some nice methods that we can work with, that will make our code look less like spaghetti.

##### `map`

It is a method to work on arrays. It allows you to take array, transform each element in some way,
and it returns new edited array, and the one that you performed operetion on remains unchanged.
It takes a callback funciton as an argument. And here we have a few examples:

```js
    // Doubling Numbers in an Array.
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(num => num * 2);

    // Converting Strings to Uppercase
    const words = ['coffee', 'brew'];
    const uppercased = words.map(word => word.toUpperCase());

    // Extracting Object Properties
    const users = [
        { id: 1, name: 'Tom' },
        { id: 2, name: 'Jerry' },
    ];

    const names = users.map(user => user.name);
```

> You should use `map` method when you want to create a new array based of an existing one while also making sure it is same length as the original array.

##### `filter`

Unlike `map`, this method returns edited array.
It creates a new array with elements meeting specific criteria.
It does what it says based on callback function return value.
The callback function must return `true` for an element to be included in the new array.

```js
    // Filtering Even Numbers
    const numbers = [1, 2, 3, 4, 5, 6];
    const evennumbers = numbers.filter(num => num % 2 === 0)

    // Removing Flasy Values
    const values = [0, 1, '', undefined, 'hello', false];
    const truthyValues = values.filter(value => Boolean(value));

    // Filtering Based on Object Properties
    const users = [
        { id: 1, name: 'Tom', active: true },
        { id: 2, name: 'Jerry', active: false },
        { id: 3, name: 'Butch', active: true },
    ];
    const activeUsers = users.filter(user => user.active);
```

##### `reduce`

This method takes values from array,
does something to them and then returns one value based on that.
The syntax for `reduce` method is different,
we need to pass additional argument to callback funciton:

```js
    array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

Must:
- `accumulator`: The accumulated result from previous iteration.
- `currentValue`: The current element being processed.

Optional:
- `index`: The index of the current element. (Also in `map` and `filter`)
- `array`: The original array. (Also in `map` and `filter`)
- `initialValue`: A value to start the accumulation. If ommited, the first element of the array is used as the initial value, and the iteration starts from the second element.

```js
    // Summing Numbers in an Array
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

    // Finding the Maximum Value
    const numbers = [10, 5, 8, 20, 3];
    const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);

    // Grouping Items by Property
    const people = [
        { name: 'Tom', age: 10 },
        { name: 'Jerry', age: 10 },
        { name: 'Butch', age: 11 },
    ];
    const groupedByAge = people.reduce((acc, person) => {
        if(!acc[person.age]) {
            acc[person.age] = [];
        }
        acc[person.age].push(person);
        return acc;
    }, {});

    // Flattening an Array of Arrays
    const arrays = [[1, 2], [3, 4], [5]];
    const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
```

#### Oject Oriented Programming

JavaScript does not have classes in the same way like Java or C++.
ES6 introduces `class` keyword that is (not only, you can find more on that in resources on `class`) a syntactic sugar that is basicly the exact same
thing as the object constructors and prototypes.

### How to set up Webpack

`src` directory is a directory with our project files.
`dist` directory is a directory with built project files.
`webpack.config.js` is a file with all the configuration of webpack modules, plugins, etc.

Create new directory for the project.
```bash
    mkdir webpack-practice && cd webpack-practice
```

Install Webpack, which involves two packages.
```bash
    npm install --save-dev webpack webpack-cli
```

```bash
    mkdir src && touch src/index.js src/greeting.js
```

```bash
    touch webpack.config.js
```

`webpack.config.js` (we use CommonJS require instead of import):

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

Now we can run webpack.
```bash
    npx webpack
```

#### Handling HTML

We need to install `HtmlWebpackPlugin`
```bash
    npm install --save-dev html-webpack-plugin
```

Then we need to edit our `webpack.config.js` file so it knows about the plugin.
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
```

#### Loading CSS

We have to install two packages `style-loader` and `css-loader`.
```bash
    npm install --save-dev style-loader css-loader
```

We have to make sure we `use` `css-loader` after `style-loader`, because the list is being read
backwards and we need to load css so we can use it for styling later kinda...
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

#### Loading images

```bash
    npm install --save-dev html-loader
```

Add following object to the `modules.rules` in `webpack.config.js`:
```js
{
    test: /\.html$/i,
    loader: "html-loader",
}
```

We can provide all the extenstions in regex and put it in the object:
```js
{
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
}
```

#### Webpack dev server

To install the `webpack-dev-server` we need to:
```bash
    npm install --save-dev webpack-dev-server
```

After everything `webpack.config.js` should look something like this:
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

Also we can add more files to `devServer.watchFiles`.
