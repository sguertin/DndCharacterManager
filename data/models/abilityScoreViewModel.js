import ViewModel from './viewModel.js';

export default class AbilityScoreViewModel extends ViewModel {
    constructor() {
        this._data = {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,
        };
        this._handlers = {
            strength: (value) => (this.strength = value),
            dexterity: (value) => (this.dexterity = value),
            constitution: (value) => (this.constitution = value),
            intelligence: (value) => (this.intelligence = value),
            wisdom: (value) => (this.wisdom = value),
            charisma: (value) => (this.charisma = value),
        };
        super();
    }
}
