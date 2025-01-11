---
title: HTML and CSS
date: 2025-12-31 12:00:00 +0100
categories: [Web_Development]
tags: [html, css]
---

This blog post is my approach on [The Odin Project](https://www.theodinproject.com) **HTML** and **CSS** modules, both Intermedie and Advanced.

## Fundamentals

### HTML Boilerplate - CheatSheet

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <title>Boilerplate title</title>
</head>
<body>
    <p>Paragraph</p>

    <!-- Six types of headings -->
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <strong>Bold text</strong>
    <em>Italic text</em>
    
    <!-- Ordered list -->
    <ol>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
    <ol>
    
    <!-- Unordered list -->
    <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
    </ul>

    <!-- Link opening in the same tab -->
    <a href="https://Zabsooon.github.io">Home page</a>
    <!-- Link opening in new tab -->
    <a href="https://Zabsooon.github.io" target="_blank" rel="noopener noreferrer">Home page</a>
    
    <img src="https://Zabsooon.github.io/profile.jpg" alt="My profile picture" height="300" width="300">
    
</body>
</html>
```

## Styling

### Flexbox

Resources:
- [Flexbox cheatsheet](https://flexbox.malven.co/)
- [Flexbox in practice](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

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

### SVGs

**SVG** stands for *Scalable Vector Graphics* and they are defined by mathematical vectors and can be modified using *CSS* and *JavaScript*. They are usefull for:
- Icons
- Graphs/Charts
- Large, simple images
- Patterned backgrounds
- Applying effects to other elements via SVG filters

They are written in **XML** (*Extensible Markup Language*) they can be interacted with [Element WebAPI](https://developer.mozilla.org/en-US/docs/Web/API/Element)