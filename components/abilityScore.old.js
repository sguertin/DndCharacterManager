import IdManager, {
    getFirst as $,
    getModifier as mod,
    getAbbreviation as abbrev,
} from '../utility/helpers.js';

import ViewModel from '../models/viewModel.js';

class AbilitiesViewModel extends ViewModel {
    data = {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,

        acrobatics: 0,
        animalHandling: 0,
        arcana: 0,
        athletics: 0,
        history: 0,
        insight: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        religion: 0,
        sleightOfHand: 0,
        stealth: 0,
        survival: 0,
    };
    formulas = {
        strengthMod: (get) => mod(get('strength')),
        dexterityMod: (get) => mod(get('dexterity')),
        constitutionMod: (get) => mod(get('constitution')),
        intelligenceMod: (get) => mod(get('intelligence')),
        wisdomMod: (get) => mod(get('wisdom')),
        charismaMod: (get) => mod(get('charisma')),
    };
}

class ProficiencyElement extends HTMLLIElement {
    static get observedAttributes() {
        return ['proficient', 'expertise'];
    }

    constructor({ name, modifier = 0, proficient = false, expertise = false }) {
        super();
        let id = IdManager.getNewId(this),
            skillModifierEl = document.createElement('span'),
            profCheckEl = document.createElement('input'),
            expertiseCheckEl = document.createElement('input'),
            labelEl = document.createElement('label'),
            expertiseDisplay = name.toLowerCase().endsWith('save')
                ? 'none'
                : 'inherit';

        this.name = name;
        this.modifier = modifier;
        this.expertise = expertise;
        this.proficient = proficient;

        this.className = 'Skill';
        this.innerHTML = `
            <span class="SkillModifier"></span>
            <input id="${id}" type="checkbox" class="ProficiencyCheck" /> 
            <input type="checkbox" class="ExpertiseCheck" 
                style="display: ${expertiseDisplay}"/>
            <label for="${id}">${this.name}</label>
        `;
    }

    /**
     * Adds a callback function to be invoked any time the checkboxes are updated
     * @param {function} callback - The callback to be invoked when the checkboxes are updated
     */
    addListener(callback) {
        if (this.#listeners) {
            this.#listeners.push(callback);
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            this.#listeners.forEach((callback) => callback(newValue, oldValue));
        }
    }

    connectedCallback() {
        $('.ProficiencyCheck', this).onchange = (e) => {
            if (e.target.checked && $('.ExpertiseCheck', this).checked) {
                this.proficiency = 2;
            } else if (e.target.checked) {
                this.proficiency = 1;
            } else {
                this.proficiency = 0;
            }
        };
        $('.ExpertiseCheck', this).onchange = (e) => {
            if (e.target.checked) {
                this.proficiency = 2;
            } else if ($('.ProficiencyCheck').checked) {
                this.proficiency = 1;
            } else {
                this.proficiency = 0;
            }
        };
    }

    get modifier() {
        return this.#modifier;
    }
    set modifier(value) {
        this.#modifier = value;
        if (value > 0) {
            value = '+' + value;
        }
        if ($('.SkillModifier', this)) {
            $('.SkillModifier', this).textContent = value;
        }
    }

    get proficiency() {
        return this.#proficiency;
    }
    set proficiency(value) {
        if (this.#proficiency !== value) {
            this.#proficiency = value;

            if (
                $('.ProficiencyCheck', this) &&
                $('.ProficiencyCheck', this).checked != value > 0
            ) {
                $('.ProficiencyCheck', this).checked = value > 0;
            }
            if (
                $('.ExpertiseCheck', this) &&
                $('.ExpertiseCheck', this).checked != value > 1
            ) {
                $('.ExpertiseCheck', this).checked = value > 1;
            }
        }
    }
}

class AbilityScore extends HTMLDivElement {
    score = 10;
    modifier = 0;

    #scoreEl;
    #modifierEl;

    static get observedAttributes() {
        return ['score'];
    }

    constructor(labelText, score, modifier) {
        super();
        if (score) {
            this.score = score;
        }
        if (modifier) {
            this.modifier = modifier;
        }

        let abilityScoreEl = document.createElement('div'),
            scoreEl = document.createElement('input'),
            label = document.createElement('label'),
            modifierEl = document.createElement('span');

        scoreEl.id = IdManager.getNewId(scoreEl);
        scoreEl.type = 'number';
        scoreEl.max = '30';
        scoreEl.min = '1';
        scoreEl.step = '1';
        scoreEl.value = this.score;

        modifier.className = 'Modifier';
        modifer.textContent = `${this.modifier}`;

        label.for = scoreEl.id;
        label.textContent = labelText;
        abilityScoreEl.className = 'AbilityScore';

        abilityScoreEl.appendChild(label);
        abilityScoreEl.appendChild(scoreEl);
        abilityScoreEl.appendChild(modifierEl);

        this.#scoreEL = scoreEl;
        this.#modifierEl = modifierEl;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'score') {
            if (oldValue !== newValue) {
                this.#scoreEl.value = newValue;
            }
        } else if (name === 'modifier') {
            if (oldValue !== newValue) {
                this.#modifierEl.textContent = newValue;
            }
        }
    }

    connectedCallback() {
        this.#scoreEl.onchange = (ev) => {
            let newValue = ev.target.value;
            if (newValue !== this.score) {
                this.score = newValue;
            }
        };
    }
}

class Ability extends HTMLDivElement {
    name;

    static get observedAttributes() {
        return ['score'];
    }
    constructor(name, skills, score, modifier) {
        super();

        let skillList = [`${name}Save`, ...skills];
    }

    attributeChangedCallback(name, oldValue, newValue) {}

    connectedCallback() {}
}
/**
 * Represents the ability score HTML Element as well as proficiencies associated with the ability score.
 */
export default class AbilityScore {
    name;
    #prevScore = null;
    #skillList;
    #skillInfo;
    #element;

    constructor({ name, skills }) {
        this.name = name;
        this.scoreId = `${name}Score`;
        this.modifierId = `${name}Modifier`;
        this.saveModifierId = `${name}Save`;
        this.#skillList = [this.saveModifierId, ...skills];

        this.#skillInfo = this.#skillList.reduce((result, skill) => {}, {});

        this.#element = document.getElementById(name);
        if (!this.#element) {
            this.#element = this.#createAbilityBlock(name);
        }
    }
    /**
     * Returns the ability score HTMLElement.
     * @return {HTMLElement} Brief description of the returning value here.
     */
    getElement() {
        return this.#element;
    }
    /**
     * Retrieves the skill info for the specified skill (if any exists) or returns object with all skill information if no input is provided
     * @param {String} skill - (Optional) Name of skill to retrieve
     * @return {Object} { name: Skill Name, expertiseId: Id of Expertise CheckBox, proficientId: Id of Proficiency CheckBox, modId: Id of Modifier Span }
     */
    getSkillInfo(skill) {
        if (skill) {
            return this.#skillInfo[skill];
        }
        return this.#skillInfo;
    }
    getSkillNames = () => Object.keys(this.getSkillInfo());
    /**
     * Sets a handler function that will be invoked every time the value of the Score input field is changed
     * @param {function} handler - Function to be called when the value of the score field has changed (will be invoked with the new value)
     * @return {void}
     */
    setScoreChangedListener(handler) {
        document.getElementById(this.scoreId).onchange = (event) => {
            let newValue = event.target.value;
            if (newValue !== this.#prevScore) {
                handler(newValue, this.#prevScore);
                this.#prevScore = newValue;
            }
        };
    }

    setSkillChangeListener(skill, profCallBack, expertiseCallback) {
        let skillInfo = this.#skillInfo[skill];
        if (skillInfo) {
            this.#setProficiencyChangeListener(
                skillInfo.proficientId,
                profCallBack
            );
            this.#setProficiencyChangeListener(
                skillInfo.expertiseId,
                expertiseCallback
            );
        }
    }

    #setProficiencyChangeListener(checkId, callback) {
        let checkField = document.getElementById(checkId);
        if (checkField) {
            checkField.onchange = (event) => {
                let newValue = event.target.value;
                callback(newValue);
            };
        }
    }
    setScore(value) {
        document.getElementById(this.scoreId).value = value;
    }
    setModifier(value) {
        document.getElementById(this.modifierId).value = value;
    }
    setSkillProficiency(skill, proficient, expertise, disable = false) {
        let skillInfo = this.#skillInfo[skill];
        if (skillInfo) {
            let profCheck = document.getElementById(skillInfo.proficientId),
                expertCheck = document.getElementById(skillInfo.expertiseId);
            if (profCheck) {
                profCheck.value = proficient;
            }
            if (expertCheck) {
                expertCheck.value = expertise;
                expertCheck.disabled = disable;
            }
        }
    }
    #getAbbreviation(ability) {
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

    #createAbilityBlock = (name) => {
        let abilityBlock = document.createElement('div'),
            abilityScore = this.#createScoreBlock(name),
            proficiencyList = this.#createProficiencyBlock();

        abilityBlock.id = name;
        abilityBlock.className = 'Ability';

        abilityBlock.appendChild(abilityScore);
        abilityBlock.appendChild(proficiencyList);

        return abilityBlock;
    };

    #createScoreBlock(name) {
        let scoreDiv = document.createElement('div'),
            labelText = this.#getAbbreviation(name),
            scoreInput = new NumberField({ labelText }),
            modifier = document.createElement('span');
        modifier.id = this.modifierId;
        modifier.className = 'Modifier';

        scoreDiv.className = 'AbilityScore';

        scoreDiv.appendChild(label);
        scoreDiv.appendChild(scoreInput);
        scoreDiv.appendChild(modifier);

        return scoreDiv;
    }

    #createProficiencyBlock() {
        let block = document.createElement('div'),
            profList = document.createElement('ul');

        block.className = 'ProficiencyList';
        block.appendChild(profList);

        for (let skill in Object.values(this.#skillInfo)) {
            let skillItem = this.#createSkillProficiencyElement(skill);
            profList.appendChild(skillItem);
        }

        return profList;
    }

    #createSkillProficiencyElement(skill) {
        let skillItem = document.createElement('li'),
            skillMod = document.createElement('span'),
            skillProfCheck = document.createElement('input'), // TODO Replace with CheckBoxInputField classes
            skillExpertiseCheck = document.createElement('input'),
            skillLabel = document.createElement('label');

        skillMod.id = skill.modId;
        skillMod.className = 'Modifier';
        skillItem.appendChild(skillMod);

        skillProfCheck.className = 'ProficiencyCheck';
        skillProfCheck.id = skill.proficientId;
        skillProfCheck.name = skill.proficientId;
        skillProfCheck.type = 'checkbox';
        skillItem.appendChild(skillProfCheck);

        if (skill.expertiseId) {
            skillExpertiseCheck.className = 'ExpertiseCheck';
            skillExpertiseCheck.id = skill.expertiseId;
            skillExpertiseCheck.name = skill.expertiseId;
            skillExpertiseCheck.type = 'checkbox';
            skillItem.appendChild(skillExpertiseCheck);
        }

        skillLabel.textContent = skill.name;
        skillLable.for = skill.proficientId;
        skillItem.appendChild(skillLabel);

        return skillItem;
    }
}
