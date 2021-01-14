import BindableElement from '../../components/bindable.js';

/**
 * Base ViewModel that all ViewModel's inherit
 *
 * @export
 * @class ViewModel
 */
export default class ViewModel {
    _data = {};
    _handlers = {};
    _bindings = {};

    constructor() {
        for (let [key, value] in Object.entries(this._data)) {
            Object.defineProperty(this, key, {
                enumerable: true,
                get: () => this._data[key],
                set: (value) => {
                    this._data[key] = value;
                    this._notify(key, value);
                },
            });
        }
    }
    /**
     * PRIVATE METHOD
     * Executes all binding handlers associated with the property
     *
     * @param {string} property
     * @param {any} value
     * @memberof ViewModel
     */
    _notify(property, value) {
        var bindings = this._bindings[property];
        for (let i = 0; i < bindings.length; i++) {
            if (bindings[i]) {
                bindings[i](value);
            }
        }
    }

    /**
     * PRIVATE METHOD
     * Adds a handler to the associated property to be called when the property is update in the view model
     *
     * @param {string} property - the name of the property
     * @param {function} handler - the function to call when the property is updated
     * @memberof ViewModel
     */
    _addBinding(property, handler) {
        if (!this._bindings[property]) {
            this._bindings[property] = [handler];
        } else {
            this._bindings[property].push(handler);
        }
    }

    /**
     *  Bind the component to the viewModel based on the data keys of the view model
     *
     * @param {BindableElement} component - the component to bind to
     * @memberof ViewModel
     */
    bind(component) {
        for (let [key, value] in Object.entries(this._data)) {
            this._addBinding(key, component.addBinding(key, _handlers[key]));
        }
    }

    /**
     *
     *
     * @param {Object} model
     * @memberof ViewModel
     */
    getData(model) {
        let result = {};
        for (let [key, value] in Object.entries(model)) {
            if (this._data[key]) {
                result[key] = this._data[key];
            } else {
                result[key] = value;
            }
        }
        return result;
    }
    /**
     * Sets the data in the view model to match the object passed.
     * Any additional keys will be ignored.
     *
     * @param {Object} data
     * @memberof ViewModel
     */
    setData(data) {
        for (let [key, _value] in Object.entries(this._data)) {
            let value = data[key];
            if (value) {
                this._data[key] = value;
                this._notify(key, value);
            }
        }
    }
}
