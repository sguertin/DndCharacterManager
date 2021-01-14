import ViewModel from './viewModel.js';

/**
 * ViewModel representing the Character Information
 *
 * @class CharacterInformationViewModel
 * @extends {ViewModel}
 */
export default class CharacterInformationViewModel extends ViewModel {
    /**
     * The overall level of the character
     *
     * @readonly
     * @memberof CharacterInformationViewModel
     */
    get level() {
        let level = 0;
        for (let i = 0; i < this.characterLevels.length; i++) {
            level += this.characterLevels[i].level;
        }
        return level;
    }
    constructor() {
        this._data = {
            name: 'Nobody',
            race: 'Human',
            age: 16,
            gender: 'None',
            characterLevels: [{ name: 'Fighter', level: 1 }],
        };
        this._handlers = {
            name: (value) => (this.name = value),
            race: (value) => (this.race = value),
            age: (value) => (this.age = value),
            gender: (value) => (this.gender = value),
            characterLevels: (value) => (this.characterLevels = value),
        };

        super();
    }
}
