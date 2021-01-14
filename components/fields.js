import { v4 as uuid, stringify as uuidStringify } from 'https://jspm.dev/uuid';

// TODO Update these classes to extend HTMLElement/HTMLInputElement
class InputField {
    static defaultConfig = {
        labelText: null,
        type: null,
        id: null,
    };
    #element;
    #inputElement;

    /** 
    * Brief description of the function here.
    * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
    * @param {Object} config - An object representing configuration options 
    * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
    */  
    constructor(config) {
        config = Object.assign(this.defaultConfig, config);

        let element = document.getElementById(id),
            type = config.type,
            labelText = config.labelText,
            id = config.id,
            fieldLabel,
            inputId,
            labelId;

        if (!type) {
            throw new Error('Field type must be specified');
        }
        if (!id) {
            id = uuidStringify(uuid());
        }
        inputId = `${id}-input`;
        labelId = `${id}-label`;

        if (element === null) {
            element = document.createElement('div');
            element.id = id;

            inputElement = document.createElement('input');
            inputElement.id = inputId;

            fieldLabel = document.createElement('label');
            fieldLabel.for = id;
            fieldLabel.id = labelId;
            fieldLabel.textContent = labelText;
        } else {
            this.#element = element;
            this.#inputElement = document.getElementById(inputId);
        }

        inputElement.type = type;
        this.#inputElement = inputElement;
    }
    getElement() {
        return this.#element;
    }
    getValue() {
        return this.#inputElement.value;
    }
    setValue(value) {
        let oldValue = this.#inputElement.value;
        this.#inputElement.value = value;
        if (!this.#element.checkValidity()) {
            this.#element.value = oldValue;
        }
    }
    bind(setter) {
        this.#inputElement.addEventListener('input', (field) => {
            setter(field.target.value);
        });
    }
}
class TextInputField extends InputField {
    static defaultConfig = {
        id = null,
        labelText: null,
        maxLength: 0,
        pattern: null,
    };
    constructor(config) {
        config = Object.assign(this.defaultConfig, config);
        config.type = 'text';
        super(config);

        let input = this.#inputElement;
        if (config.maxLength > 0) {
            input.maxLength = config.maxLength;
        }
        if (config.pattern) {
            input.pattern = config.pattern;
        }
    }
}
class NumberInputField extends InputField {
    static defaultConfig = {
        id = null, 
        labelText: null,
        min = 0, 
        max = 30, 
        step = 1,
    }
    constructor(config) {
        config = Object.assign(this.defaultConfig, config);
        config.type = 'number';
        super(config);

        let inputElement = this.#element;
        inputElement.min = config.min;
        inputElement.max = config.max;
        inputElement.step = config.step;
    }
}
// TODO Add Checkbox InputField next
export default { InputField, TextInputField, NumberInputField, };
