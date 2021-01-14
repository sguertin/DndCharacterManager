/**
 * Basic bindable element that binds via the addBinding function and attributes of the Element
 *
 * @export
 * @class BindableElement
 * @extends {HTMLElement}
 */
export default class BindableElement extends HTMLElement {
    rendered = false;
    bindings = {};
    constructor() {
        super();
    }

    /**
     * Renders the element
     *
     * @memberof BindableElement
     */
    render() {}

    /**
     * Add a binding for a property of the element
     *
     * @param {string} property - the name of the property to bind to
     * @param {function} handler - function to call when this property is changed on the element
     * @return {function} a setter function for the property
     * @memberof BindableElement
     */
    addBinding(property, handler) {
        if (this.bindings[property]) {
            this.bindings[property].push((value) => handler(value));
        } else {
            this.bindings[property] = [(value) => handler(value)];
        }
        return (value) => this.setAttribute(property, value);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
        if (this.rendered === false) {
            this.rendered = true;
        }
        let bindings = this.bindings[name];
        if (bindings && oldValue !== newValue) {
            for (let i = 0; i < bindings.length; i++) {
                bindings[i](newValue);
            }
        }
    }
}
