import Ajax from '../../js/ajax.js';

export default class DataProvider {
    static classes = [];
    static skills = [];
    static feats = [];
    static languages = [];
    static races = [];
    static toolProficiencies = [];
    static weaponProficiencies = [];
    static armorProficiencies = [];
    static initialized = false;
    constructor() {}

    static initialize() {
        // TODO : Implement side-loading mechanism
        let modulesLoaded = 0,
            totalModules = 0;
        return new Promise((resolve, reject) => {
            let finish = () => {
                this.DataProvider.initialized = true;
                resolve();
            };
            totalModules++;
            Ajax.get('resources/armorProficiencies.json').then(
                (armorProficiencies) => {
                    DataProvider.armorProficiencies = armorProficiencies;
                    modulesLoaded++;
                    if (modulesLoaded === totalModules) {
                        finish();
                    }
                }
            ).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/classes.json').then((classes) => {
                DataProvider.classes = classes;
                modulesLoaded++;
                if (modulesLoaded === totalModules) {
                    finish();
                }
            }).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/feats.json').then((feats) => {
                DataProvider.feats = feats;
                modulesLoaded++;
                if (modulesLoaded === totalModules) {
                    finish();
                }
            }).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/items.json').then((items) => {
                DataProvider.items = items;
                modulesLoaded++;
                if (modulesLoaded === totalModules) {
                    finish();
                }
            }).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/languages.json').then((languages) => {
                DataProvider.languages = languages;
                modulesLoaded++;
                if (modulesLoaded === totalModules) {
                    finish();
                }
            }).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/races.json').then((races) => {
                DataProvider.races = races;
                modulesLoaded++;
                if (modulesLoaded === totalModules) {
                    finish();
                }
            }).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/skills.json').then((skills) => {
                DataProvider.skills = skills;
                modulesLoaded++;
                if (modulesLoaded === totalModules) {
                    finish();
                }
            }).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/toolProficiencies.json').then(
                (toolProficiencies) => {
                    DataProvider.toolProficiencies = toolProficiencies;
                    modulesLoaded++;
                    if (modulesLoaded === totalModules) {
                        finish();
                    }
                }
            ).catch(()=> {
                reject()
            });
            totalModules++;
            Ajax.get('resources/weaponProficiencies.json').then(
                (weaponProficiencies) => {
                    DataProvider.weaponProficiencies = weaponProficiencies;
                    modulesLoaded++;
                    if (modulesLoaded === totalModules) {
                        finish();
                    }
                }
            ).catch(()=> {
                reject()
            });
        });
    }
}
