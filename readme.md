# Simple DOM

### Installation:
```markdown
npm i --save smpldm
yarn add smpldm
```

### Basic usage:
```javascript
const {add, SmpldmElement, byID} = require("smpldm");

const input = new SmpldmElement("input", { className: "red" });
input.on("click focus", () => document.body.style.backgroundColor = "red");
input.on("blur", () => document.body.style.background = "white");

add(input).to(byID("container"));
```

#### Basic Documentation:

##### Creating elements
```javascript
//                New Element     TagName       Attributes (note class becomes className)
const myElement = new SmpldmElement("p", { className: "body", id: "main-text" }, [data.mainText])
//                                                                               Array of Children (including plain text)
//                                                                               smpldm automagically makes text nodes
```

##### Adding event listeners (a custom Smpldm Feature)
Note, this only works on elements created with Smpldm, not regular HTML elements
```javascript
// This is effectively a shorthand for .addEventListener, hence the ...options

myElement.on("click focus")
// OR 
myElement.on(["click", "focus"], callback, ...options)
```

##### Appending one element to another
```javascript
add(myElement).to(parent); // Where parent and myElement can be either SmpldmElements OR regular HTMLElement's
```

GLHF!
