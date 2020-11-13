Ext.define('DndCharacterManager.view.personnel.CharacterModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.character',
    requires: ['DndCharacterManager.model.ClassLevel'],
    data: {
        character: null,
        name: null,
        experience: 0,
        playerName: null,
        race: null,

        strength: 10,
        strengthSave: false,
        dexterity: 10,
        dexteritySave: false,
        constitution: 10,
        constitutionSave: false,
        intelligence: 10,
        intelligenceSave: false,
        wisdom: 10,
        wisdomSave: false,
        charisma: 10,
        charismaSave: false,

        armorBonus: 0,

        maxHitPoints: 0,
        currentHitPoints: 0,

        // Skill Proficiencies: 0 - Not Proficient, 1 - Proficient, 2 - Expertise
        acrobatics: 0,
        animalHandling: 0,
        arcana: 0,
        athletics: 0,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        performance: 0,
        persuasion: 0,
        religion: 0,
        sleightOfHand: 0,
        stealth: 0,
        survival: 0,

        copperPieces: 0,
        silverPieces: 0,
        electrumPieces: 0,
        goldPieces: 0,
        platinumPieces: 0,
    },

    formulas: {
        saveData: (get) => {
            return {
                name: get('name'),
                experience: get('experience'),
                playerName: get('playerName'),
                race: get('race'),

                strength: get('strength'),
                strengthSave: get('strengthSave'),
                dexterity: get('dexterity'),
                dexteritySave: get('dexteritySave'),
                constitution: get('constitution'),
                constitutionSave: get('constitutionSave'),
                intelligence: get('intelligence'),
                intelligenceSave: get('intelligenceSave'),
                wisdom: get('wisdom'),
                wisdomSave: get('wisdomSave'),
                charisma: get('charisma'),
                charismaSave: get('charismaSave'),

                armorBonus: get('armorBonus'),

                maxHitPoints: get('maxHitPoints'),
                currentHitPoints: get('currentHitPoints'),

                acrobatics: get('acrobatics'),
                animalHandling: get('animalHandling'),
                arcana: get('arcana'),
                athletics: get('athletics'),
                deception: get('deception'),
                history: get('history'),
                insight: get('insight'),
                intimidation: get('intimidation'),
                investigation: get('investigation'),
                medicine: get('medicine'),
                nature: get('nature'),
                perception: get('perception'),
                performance: get('performance'),
                persuasion: get('persuasion'),
                religion: get('religion'),
                sleightOfHand: get('sleightOfHand'),
                stealth: get('stealth'),
                survival: get('survival'),

                copperPieces: get('copperPieces'),
                silverPieces: get('silverPieces'),
                electrumPieces: get('electrumPieces'),
                goldPieces: get('goldPieces'),
                platinumPieces: get('platinumPieces'),
            };
        },
    },
});
