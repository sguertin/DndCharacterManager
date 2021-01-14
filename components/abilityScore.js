import BindableElement from './bindable.js';
import {
    getModifier as mod,
    getAbbreviation as abbrev,
    setInputFilter,
} from '../utility/helpers.js';

/**
 * An ability score entry
 *
 * @export
 * @class AbilityScore
 * @extends {BindableElement}
 */
class AbilityScore extends BindableElement {
    rendered = false;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    get name() {
        return this.getAttribute('name');
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    get score() {
        return this.getAttribute('score') || 10;
    }
    set score(score) {
        this.setAttribute('modifier', mod(score));
        this.setAttribute('score', score);
    }
    get modifier() {
        return this.getAttribute('modifier') || 0;
    }

    render() {
        let inputId = `${this.name}-score-input`;
        this.shadowRoot.innerHTML = `
            <label class="col-sm score-label" for="${inputId}" >
                ${abbrev(this.name)}
            </div>
            <div class="col-sm score" >
                <input id="${inputId}" type="text" value="${this.score}">
            </div>
            <div class="col-sm modifier" >
                ${this.modifier}
            </div>
        `;
        setInputFilter(
            this.shadowRoot.querySelector('input'),
            (value) => {
                let score = parseInt(value);
                return score != NaN && score >= 1 && score <= 30;
            },
            (ev) => {
                let value = parseInt(
                    this.shadowRoot.querySelector('input').value
                );
                if (parseInt(score) !== value) {
                    this.score = value;
                }
            }
        );
    }

    static get observedAttributes() {
        return ['name', 'score', 'modifier'];
    }
}
customElements.define('ability-score', AbilityScore, { extends: 'div' });

/**
 * List of ability scores
 *
 * @export
 * @class AbilityScorePanel
 * @extends {BindableElement}
 */
export default class AbilityScorePanel extends BindableElement {
    rendered = false;

    get strength() {
        return this.getAttribute('strength') || 10;
    }
    set strength(strength) {
        this.setAttribute('strength', strength);
    }

    get dexterity() {
        return this.getAttribute('dexterity') || 10;
    }
    set dexterity(dexterity) {
        this.setAttribute('dexterity', dexterity);
    }

    get constitution() {
        return this.getAttribute('constitution') || 10;
    }
    set constitution(constitution) {
        this.setAttribute('constitution', constitution);
    }

    get intelligence() {
        return this.getAttribute('intelligence') || 10;
    }
    set intelligence(intelligence) {
        this.setAttribute('intelligence', intelligence);
    }

    get wisdom() {
        return this.getAttribute('wisdom') || 10;
    }
    set wisdom(wisdom) {
        this.setAttribute('wisdom', wisdom);
    }

    get charisma() {
        return this.getAttribute('wisdom') || 10;
    }
    set charisma(charisma) {
        this.setAttribute('charisma', charisma);
    }

    /**
     * Sets all the ability scores via one object
     *
     * @param {Object} scores - an object containing all the ability score values
     * @memberof AbilityScorePanel
     */
    set abilityScores(scores) {
        this.strength = scores.strength;
        this.dexterity = scores.dexterity;
        this.constitution = scores.constitution;
        this.intelligence = scores.intelligence;
        this.wisdom = scores.wisdom;
        this.charisma = scores.charisma;
    }

    get abilityScores() {
        return {
            strength: this.strength,
            dexterity: this.dexterity,
            constitution: this.constitution,
            intelligence: this.intelligence,
            wisdom: this.wisdom,
            charisma: this.charisma,
        };
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.setAttribute('class', 'container-fluid ability-scores-panel');
    }

    render() {
        this.shadowRoot.innerHTML = `            
            <div class="row">
                <ability-score name="strength" score="${this.strength}"></ability-score>
            </div>
            <div class="row">
                <ability-score name="dexterity" score="${this.dexterity}"></ability-score>
            </div>
            <div class="row">
                <ability-score name="constitution" score="${this.constitution}"></ability-score>                
            </div>
            <div class="row">
                <ability-score name="intelligence" score="${this.intelligence}"></ability-score>
            </div>
            <div class="row">
                <ability-score name="wisdom" score="${this.wisdom}"></ability-score>
            </div>
            <div class="row">
                <ability-score name="charisma" score="${this.charisma}"></ability-score>                
            </div>        
        `;
    }

    static get observedAttributes() {
        return [
            'strength',
            'dexterity',
            'constitution',
            'intelligence',
            'wisdom',
            'charisma',
        ];
    }
}
customElements.define('ability-scores-list', AbilityScorePanel, {
    extends: 'div',
});
