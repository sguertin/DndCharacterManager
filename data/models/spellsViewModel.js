import ViewModel from './viewModel.js';
import AbilityScoreViewModel from './abilityScoreViewModel.js';
import CharacterInformationViewModel from './characterInformationViewModel.js';
import {
    getModifier as mod,
    getProficiencyModifier as prof,
} from '../../utility/helpers.js';

export default class SpellViewModel extends ViewModel {
    get spellSaveDC() {
        let query = {};

        query[this.spellcastingAbility] = 10;

        let level = this._characterInfoVm.getData({ level: 1 }),
            score = this._abilityScoreVm.getData(query);
        return 8 + prof(level) + mod(score);
    }

    /**
     * Creates an instance of SpellViewModel.
     * @param {AbilityScoreViewModel} abilityScoreVm The ability score view model
     * @param {CharacterInformationViewModel} characterInfoVm The character information view model
     * @param {string} spellcastingAbility The ability score tied to the spellcasting
     * @memberof SpellViewModel
     */
    constructor(abilityScoreVm, characterInfoVm, spellcastingAbility) {
        this._abilityScoreVm = abilityScoreVm;
        this._characterInfoVm = characterInfoVm;
        this._data = {
            spellcastingAbility: spellcastingAbility,
            spellsKnown: 0,
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0,
            sixth: 0,
            seventh: 0,
            eighth: 0,
            ninth: 0,
        };
        this._handlers = {
            spellsKnown: (value) => (this.spellsKnown = value),
            strength: (value) => (this.strength = value),
            first: (value) => (this.first = value),
            second: (value) => (this.second = value),
            third: (value) => (this.third = value),
            fourth: (value) => (this.fourth = value),
            fifth: (value) => (this.fifth = value),
            sixth: (value) => (this.sixth = value),
            seventh: (value) => (this.seventh = value),
            eighth: (value) => (this.eighth = value),
            ninth: (value) => (this.ninth = value),
        };
    }
}
