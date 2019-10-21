# Simple DOM
### Simplifying the DOM for Electron Applications
#### USE IN THE RENDERER PROCESS ONLY

Basic usage:
```javascript
const {add, b, c, ct, cnp} = require("smpldm");

const header = c("h1", {id: "header", className: "blue"}, ct("Wow! A header generated from SimpleDOM"));
const testing = cnp("p", c("h1", null, ct("Some cool text here!")));
const App = c("div", {id: "App", className: "AppMain"}, header, testing);

add(App).to(b("root"));
```

#### Syntax:
```javascript
const {
  add, // Add element
  b,   // Select element (b)y id 
  c,   // Create an element
  ct,  // Create a text element
  cnp, // Create an element without props,
  genChildren // Pass children in as parameters to spit out a div containing all the children
} = require("smpldm");

// Type------------    Props (Attributes)                              Children As many as you want, just have a comma between each
//                 |   |                                               |                             // child, as if they were each
const header = c("h1", {id: "heading", className: "bold border my-2"}, ct("Hello"));                 // a new parameter

add(header).to(document.body); // Similar to react's ReactDOM.render() method.
```

Using `add`:
```javascript                                            // Using .to is essential, otherwise it won't be added anywehere
add(header /*Any element OR SimpleDOM created element*/).to(document.getElementById("root") /*, Boolean returnParent*/); // Or you can use b("root")
```

Using `b`:
```javascript
const header = b("MainHeader");
// => HTMLElement
```

Using `c`:
```javascript
const paragraph = c("p", {className: "body-text"} /*, ...children<HTMLElement>*/)
// => HTMLElement
```

Using `ct`:
```javascript                                                                    // Create a text node and append it to paragraph
const paragraph = c("p", {className: "body-text"}, c("span" {className: "bold"}, ct("TEXT HERE")))
// => HTMLElement
```

Using `cnp` is the same as using `c` just without props (attributes) so the syntax is as follows:
```javascript
const paragraph = cnp("p" /*, ...children<HTMLElement>*/)
// => HTMLElement
```

cnp simply stands for create no props

Using `genChildren`:
```javascript
const App = genChildren(null, header, paragraph); // the first parameter is props
// => HTMLElement
add(App).to(b("root"));
```