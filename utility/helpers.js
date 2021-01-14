const INPUT_EVENTS = [
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'mouseup',
    'select',
    'contextmenu',
    'drop',
];

/**
 *  Static class to keep track of Id's of elements
 *
 * @export
 * @class IdManager
 */
export default class IdManager {
    static ids = {};
    static counter = 0;
    static prefix = 'app';

    static getNewId(elem) {
        let id = `${this.prefix}-${this.counter}`;
        this.counter += 1;
        this.ids[id] = elem;
        return id;
    }
}

/**
 * Returns the first element that is a descendant of node that matches selectors.
 * @param {string} selector - Query String selector for the element to be selected
 * @param {HTMLElement} el - The element to be searched, defaults to 'this'
 * @return {HTMLElement} The first element that matches the selector
 */
function getFirst(selector, el = null) {
    if (!el) {
        el = document;
    }
    return el.querySelector(selector);
}

/**
 * Returns all element descendants of node that match selectors.
 * @param {string} selector - Query String selector for the element to be selected
 * @param {HTMLElement} el - The element to be searched, defaults to 'this'
 * @return {Array<HTMLElement>} All elements that match the selector
 */
function getAll(selector, el = null) {
    if (!el) {
        el = document;
    }
    return Array.prototype.slice.call(el.querySelectorAll(selector));
}

/**
 * Returns an abbreviation for the given full name of an ability score
 * @param {string} ability - the full name of the ability score (case insensitive)
 * @return {string} the abbreviation of the ability score (default: '')
 */
function getAbbreviation(ability) {
    switch (ability.toLowerCase()) {
        case 'strength':
            return 'STR';
        case 'dexterity':
            return 'DEX';
        case 'constitution':
            return 'CON';
        case 'intelligence':
            return 'INT';
        case 'wisdom':
            return 'WIS';
        case 'charisma':
            return 'CHA';
        default:
            return '';
    }
}

/**
 * Returns the modifier for a given ability score value
 * @param {int} score - the ability score to get the modifier for
 * @return {string} the modifier for the score provided
 */
function getModifier(score) {
    let mod = Math.floor((score - 10) / 2);
    if (mod > 0) {
        return `+${mod}`;
    }
    return `${mod}`;
}

/**
 * Returns the proficiency modifier for a given character level
 * @param {int} level - the character's total level
 * @return {int} the proficiency modifier
 */
function getProficiencyModifier(level) {
    return 2 + Math.floor((level - 1) / 4);
}

/**
 * Add a filter to an text input element for all input change events
 *
 * @param {HTMLInputElement} textInput - the text input element to add the filter to
 * @param {function} inputFilter - the filter function to add to the input element
 * @param {function} changeFn - additional onChangeFn to be called
 */
function setInputFilter(textInput, inputFilter, onChangeFn = null) {
    INPUT_EVENTS.forEach((event) => {
        textInput.addEventListener(event, function (ev) {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty('oldValue')) {
                this.value = this.oldValue;
                this.setSelectionRange(
                    this.oldSelectionStart,
                    this.oldSelectionEnd
                );
            } else {
                this.value = '';
            }
        });
    });
    textInput.onchange = (ev) =>
        function (ev) {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty('oldValue')) {
                this.value = this.oldValue;
                this.setSelectionRange(
                    this.oldSelectionStart,
                    this.oldSelectionEnd
                );
            } else {
                this.value = '';
            }
            if (onChangeFn) {
                this.apply(onChangeFn(ev), this);
            }
        };
}

export {
    getAbbreviation,
    getAll,
    getFirst,
    getModifier,
    getProficiencyModifier,
    setInputFilter,
};
