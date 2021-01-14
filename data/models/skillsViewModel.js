import ViewModel from './viewModel.js';

export default class SkillsViewModel extends ViewModel {
    get acrobatics() {
        return this._data.acrobatics;
    }
    get acrobaticsBonus() {
        return this._data.acrobaticsBonus;
    }
    get animalHandling() {
        return this._data.animalHandling;
    }
    get animalHandlingBonus() {
        return this._data.animalHandlingBonus;
    }
    get arcana() {
        return this._data.arcana;
    }
    get arcanaBonus() {
        return this._data.arcanaBonus;
    }
    get athletics() {
        return this._data.athletics;
    }
    get athleticsBonus() {
        return this._data.athleticsBonus;
    }
    get history() {
        return this._data.history;
    }
    get historyBonus() {
        return this._data.historyBonus;
    }
    get insight() {
        return this._data.insight;
    }
    get insightBonus() {
        return this._data.insightBonus;
    }
    get investigation() {
        return this._data.investigation;
    }
    get investigationBonus() {
        return this._data.investigationBonus;
    }
    get medicine() {
        return this._data.medicine;
    }
    get medicineBonus() {
        return this._data.medicineBonus;
    }
    get nature() {
        return this._data.nature;
    }
    get natureBonus() {
        return this._data.natureBonus;
    }
    get perception() {
        return this._data.perception;
    }
    get perceptionBonus() {
        return this._data.perceptionBonus;
    }
    get religion() {
        return this._data.religion;
    }
    get religionBonus() {
        return this._data.religionBonus;
    }
    get sleightOfHand() {
        return this._data.sleightOfHand;
    }
    get sleightOfHandBonus() {
        return this._data.sleightOfHandBonus;
    }
    get stealth() {
        return this._data.stealth;
    }
    get stealthBonus() {
        return this._data.stealthBonus;
    }
    get survival() {
        return this._data.survival;
    }
    get survivalBonus() {
        return this._data.survivalBonus;
    }
    constructor() {
        this._data = {
            acrobatics: 0,
            acrobaticsBonus: 0,
            animalHandlingBonus: 0,
            animalHandling: 0,
            arcanaBonus: 0,
            arcana: 0,
            athleticsBonus: 0,
            athletics: 0,
            historyBonus: 0,
            history: 0,
            insightBonus: 0,
            insight: 0,
            investigationBonus: 0,
            investigation: 0,
            medicineBonus: 0,
            medicine: 0,
            natureBonus: 0,
            nature: 0,
            perceptionBonus: 0,
            perception: 0,
            religionBonus: 0,
            religion: 0,
            sleightOfHandBonus: 0,
            sleightOfHand: 0,
            stealthBonus: 0,
            stealth: 0,
            survivalBonus: 0,
            survival: 0,
        };
        this._handlers = {
            acrobaticsBonus: (value) => (this.acrobaticsBonus = value),
            acrobatics: (value) => (this.acrobatics = value),
            animalHandlingBonus: (value) => (this.animalHandlingBonus = value),
            animalHandling: (value) => (this.animalHandling = value),
            arcanaBonus: (value) => (this.arcanaBonus = value),
            arcana: (value) => (this.arcana = value),
            athleticsBonus: (value) => (this.athleticsBonus = value),
            athletics: (value) => (this.athletics = value),
            historyBonus: (value) => (this.historyBonus = value),
            history: (value) => (this.history = value),
            insightBonus: (value) => (this.insightBonus = value),
            insight: (value) => (this.insight = value),
            investigationBonus: (value) => (this.investigationBonus = value),
            investigation: (value) => (this.investigation = value),
            medicineBonus: (value) => (this.medicineBonus = value),
            medicine: (value) => (this.medicine = value),
            natureBonus: (value) => (this.natureBonus = value),
            nature: (value) => (this.nature = value),
            perceptionBonus: (value) => (this.perceptionBonus = value),
            perception: (value) => (this.perception = value),
            religionBonus: (value) => (this.religionBonus = value),
            religion: (value) => (this.religion = value),
            sleightOfHandBonus: (value) => (this.sleightOfHandBonus = value),
            sleightOfHand: (value) => (this.sleightOfHand = value),
            stealthBonus: (value) => (this.stealthBonus = value),
            stealth: (value) => (this.stealth = value),
            survivalBonus: (value) => (this.survivalBonus = value),
            survival: (value) => (this.survival = value),
        };
        super();
    }
}
