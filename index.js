const add = el => {
    return {
        to(parent, returnParent = false) {
            parent.appendChild(el);
            return returnParent ? parent : undefined;
        }
    }
};
const ct = t => document.createTextNode(t);
const b = i => document.getElementById(i);
const c = (type, props, ...children) => {
    const _el = document.createElement(type);
    if (props) Object.keys(props).forEach(prop => _el.setAttribute(prop.replace("className", "class"), props[prop]));
    if (children) children.forEach(child => _el.appendChild(child));
    return _el;
};

module.exports = {
    add,
    ct,
    b,
    c,
    cnp(type, ...children) {
        const _el = document.createElement(type);
        if (children) children.forEach(child => _el.appendChild(child));
        return _el;
    },
    genChildren(props, ...children) {
        const _el = document.createElement("div");
        if (props) Object.keys(props).forEach(prop => _el.setAttribute(prop.replace("className", "class"), props[prop]));
        if (children) children.forEach(child => _el.appendChild(child));
        return _el;
    }
};