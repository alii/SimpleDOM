const add = el => {
    return {
        to(parent, returnParent = false) {
            parent.appendChild(el);
            return returnParent ? parent : undefined;
        }
    }
};

function SmpldmElement(tagName, props = {}, children = []) {
    const _el = document.createElement(tagName)
    _el.on = (eventNames = ["click"], callback = () => console.log("Clicked"), ...options) => {
        const addEvent = eventName => _el.addEventListener(eventName, callback, ...options);

        // If it's an array, loop through each one.
        if (Array.isArray(eventNames)) return eventNames.forEach(addEvent);

        // If it's not an array, ignore, split by " " and loop through. If there is only one specified, it will split to an
        // array with the singular element, so this works.
        eventNames.split(" ").forEach(addEvent);
    }

    Object.keys(props).forEach(prop => _el.setAttribute(prop.replace("className", "class"), props[prop]));
    children.forEach(child => {
        if (typeof child === "string") return _el.appendChild(document.createTextNode(child));
        _el.appendChild(child)
    });

    return _el;
}

const byID = id => document.getElementById(id);

if (!window && global) { // Node enviroment, even though who's using dom in the browser LOL
    module.exports = {
        SmpldmElement,
        add,
        byID
    };
}