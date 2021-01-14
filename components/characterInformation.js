import * as helpers from '../utility/helpers.js';
import DataProvider from '../models/dataProvider.js';
import BindableElement from './bindable.js';

/**
 * A Character Level Element
 *
 * @export
 * @class CharacterLevel
 * @extends {BindableElement}
 */
export class CharacterLevel extends BindableElement {
    get className() {
        return this.getAttribute('className') || '';
    }
    set className(className) {
        this.setAttribute('className', className);
    }

    get level() {
        return this.getAttribute('level') || 1;
    }
    set level(level) {
        this.setAttribute('level', level);
    }

    constructor() {
        super();
        this.setAttribute('class', 'entry-field');
    }

    render() {
        var me = this;
        this.innerHTML = `
            <div class="col-sm"><input type="text" value="${this.className}"/></div>
            <div class="col-1"><input type="text" value="${this.level}"/></div>
        `;
        helpers.setInputFilter(
            (textInput = this.querySelector('.col-sm input')),
            (inputFilter = (value) =>
                DataProvider.classes
                    .map((c) => c.name.toLowerCase())
                    .includes(value.toLowerCase())),
            (changeFn = (_ev) => {
                let classEntry = DataProvider.classes.filter(
                    (c) => c.name.toLowerCase() === this.value.toLowerCase()
                );
                if (this.value !== classEntry.name) {
                    this.value = classEntry.name;
                }
            })
        );
        helpers.setInputFilter(
            this.querySelector('.col-1 input'),
            (value) => {
                let level = parseInt(value);
                return level != NaN && level >= 1 && level <= 20;
            },
            (_ev) => {
                if (me.level !== this.value) {
                    me.level = this.value;
                }
            }
        );
    }

    static get observedAttributes() {
        return ['className', 'level'];
    }
}
customElements.define('character-level', AbilityScore, { extends: 'div' });

/**
 * Basic Information about Character including name, race, age, gender, class, level
 *
 * @export
 * @class CharacterInformation
 * @extends {BindableElement}
 */
export default class CharacterInformation extends BindableElement {
    rendered = false;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.setAttribute('class', 'container-fluid character-information');
    }
    get name() {
        return this.getAttribute('name');
    }
    set name(name) {
        this.setAttribute('name', name) || '';
    }

    get race() {
        return this.getAttribute('race');
    }
    set race(race) {
        this.setAttribute('race', race) || '';
    }

    get age() {
        return this.getAttribute('age') || 0;
    }
    set age(age) {
        this.setAttribute('age', age);
    }

    get gender() {
        return this.getAttribute('gender') || '';
    }
    set gender(gender) {
        this.setAttribute('gender', gender);
    }

    get characterLevels() {
        let classes = this.getAttribute('classes').split(','),
            levels = this.getAttribute('levels').split(','),
            characterLevels = [];

        for (let i = 0; i < classes.length; i++) {
            characterLevels.push({
                name: classes[i],
                level: levels[i],
            });
        }
        return characterLevels;
    }
    set characterLevels(characterLevels) {
        let classes = '',
            levels = '';
        for (let i = 0; i < characterLevels.length; i++) {
            if (
                !characterLevels[i] ||
                !characterLevels[i].name ||
                !characterLevels[i].level
            ) {
                continue;
            }
            classes += characterLevels[i].name + ',';
            levels += characterLevels[i].level + ',';
        }
        this.setAttribute('classes', classes);
        this.setAttribute('levels', levels);
    }

    render() {
        let html = '';
        for (let i = 0; i < this.characterLevels.length; i++) {
            if (
                !this.characterLevels[i].name &&
                !this.characterLevels[i].level
            ) {
                continue;
            }
            if (i > 0) {
                html += '<em>/</em>';
            }
            html += `
                <character-level name="${this.characterLevels[i].name}" level="${this.characterLevels[i].level}"></character-level>
            `;
        }
        this.shadowRoot.innerHTML = `
            <div class="row">
                <div class="col-md entry-field">
                    <label for="name">Name</label>
                    <input id="name" type="text" value="${this.name}" />
                </div>
                <div class="col-md entry-field">
                    <label for="race">Race</label>
                    <input id="race" type="text" value="${this.race}" />
                </div>
                <div class="col-sm entry-field">
                    <label for="age">Age</label>
                    <input id="age" type="text" value="${this.age}" />
                </div>
                <div class="col-sm entry-field">
                    <label for="gender">Gender</label>
                    <input id="gender" type="text" value="${this.gender}" />
                </div>
            </div>
            <div> class="row">
                <div id="CharacterLevels">${html}</div>
                <div class="fa fa-plus-circle addCharacterClass"></div>
            </div>
        `;
        // this.querySelector('input').onchange = (ev) => {
        //     this.score = this.querySelector('input').value;
        // };
    }

    static get observedAttributes() {
        return ['name', 'race', 'age', 'gender', 'classes', 'levels'];
    }
}
customElements.define('character-information', CharacterInformation, {
    extends: 'div',
});
