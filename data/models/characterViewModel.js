import AbilityScoreViewModel from './abilityScoreViewModel.js';
import CharacterInformationViewModel from './characterInformationViewModel.js';
import SkillsViewModel from './skillsViewModel.js';

export default class CharacterViewModel {
    information = new CharacterInformationViewModel();
    abilityScores = new AbilityScoreViewModel();
    skills = new SkillsViewModel();

    constructor() {
        
    }
}

// export default class CharacterViewModel extends ViewModel {
//     data = {
//         name: '',
//         player: '',
//         race: '',
//         class1: '',
//         class1Level: 1,
//         class2: '',
//         class2Level: 0,
//         class3: '',
//         class3Level: 0,
//         class4: '',
//         class4Level: 0,

//         strength: 10,
//         strengthSave: false,
//         dexterity: 10,
//         dexteritySave: false,
//         constitution: 10,
//         constitutionSave: false,
//         intelligence: 10,
//         intelligenceSave: false,
//         wisdom: 10,
//         wisdomSave: false,
//         charisma: 10,
//         charismaSave: false,

//         acrobatics: 0,
//         animalHandling: 0,
//         arcana: 0,
//         athletics: 0,
//         history: 0,
//         insight: 0,
//         investigation: 0,
//         medicine: 0,
//         nature: 0,
//         perception: 0,
//         religion: 0,
//         sleightOfHand: 0,
//         stealth: 0,
//         survival: 0,
//     };
//     #formulas = {
//         level: (get) => {
//             return (
//                 get('class1Level') +
//                 get('class2Level') +
//                 get('class3Level') +
//                 get('class4Level')
//             );
//         },
//         proficiencyModifier: (get) => {
//             return proficiencyModifier(get('level'));
//         },
//         expertiseModifier: (get) => {
//             return get('proficiencyModifier') * 2;
//         },
//         strengthMod: (get) => {
//             return modifier(get('strength'));
//         },
//         strengthSaveMod: (get) => {
//             return get('strengthSave')
//                 ? get('proficiencyModifier') + get('strengthModifier')
//                 : get('strengthModifier');
//         },
//         dexterityMod: (get) => {
//             return get('dexterity');
//         },
//         constitutionMod: (get) => {
//             return get('constitution');
//         },
//         intelligenceMod: (get) => {
//             return get('intelligence');
//         },
//         wisdomMod: (get) => {
//             return get('wisdom');
//         },
//         charismaMod: (get) => {
//             return get('charisma');
//         },
//     };
// }
