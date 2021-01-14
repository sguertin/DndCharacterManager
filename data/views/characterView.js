import AbilityScoreViewModel from './abilityScoreViewModel.js';
import CharacterInformationViewModel from '../models/characterInformationViewModel.js';
import SkillsViewModel from '../models/skillsViewModel.js';

/**
 * Represents a view of the data for a character
 *
 * @export
 * @class CharacterViewModel
 */
export default class CharacterView {
    information = new CharacterInformationViewModel();
    abilityScores = new AbilityScoreViewModel();
    skills = new SkillsViewModel();

    constructor() {}
}
