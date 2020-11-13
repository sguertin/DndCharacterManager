Ext.define('DndCharacterManager.model.Character', {
    extend: 'DndCharacterManager.model.Base',
    requires: ['Ext.data.proxy.LocalStorage'],

    fields: [
        { name: 'name', type: 'string' },
        { name: 'experience', type: 'int', defaultValue: 0 },
        { name: 'playerName', type: 'string' },
        { name: 'race', type: 'string' },

        { name: 'strength', type: 'int', defaultValue: 10 },
        { name: 'strengthSave', type: 'bool', defaultValue: false },
        { name: 'dexterity', type: 'int', defaultValue: 10 },
        { name: 'dexteritySave', type: 'bool', defaultValue: false },
        { name: 'constitution', type: 'int', defaultValue: 10 },
        { name: 'constitutionSave', type: 'bool', defaultValue: false },
        { name: 'intelligence', type: 'int', defaultValue: 10 },
        { name: 'intelligenceSave', type: 'bool', defaultValue: false },
        { name: 'wisdom', type: 'int', defaultValue: 10 },
        { name: 'wisdomSave', type: 'bool', defaultValue: false },
        { name: 'charisma', type: 'int', defaultValue: 10 },
        { name: 'charismaSave', type: 'bool', defaultValue: false },

        { name: 'armorBonus', type: 'int', defaultValue: 0 },

        { name: 'maxHitPoints', type: 'int', defaultValue: 1 },
        { name: 'currentHitPoints', type: 'int', defaultValue: 1 },
        
        // Skill Proficiencies: 0 - Not Proficient, 1 - Proficient, 2 - Expertise
        { name: 'acrobatics', type: 'int', defaultValue: 0 },
        { name: 'animalHandling', type: 'int', defaultValue: 0 },
        { name: 'arcana', type: 'int', defaultValue: 0 },
        { name: 'athletics', type: 'int', defaultValue: 0 },
        { name: 'deception', type: 'int', defaultValue: 0 },
        { name: 'history', type: 'int', defaultValue: 0 },
        { name: 'insight', type: 'int', defaultValue: 0 },
        { name: 'intimidation', type: 'int', defaultValue: 0 },
        { name: 'investigation', type: 'int', defaultValue: 0 },
        { name: 'medicine', type: 'int', defaultValue: 0 },
        { name: 'nature', type: 'int', defaultValue: 0 },
        { name: 'perception', type: 'int', defaultValue: 0 },
        { name: 'performance', type: 'int', defaultValue: 0 },
        { name: 'persuasion', type: 'int', defaultValue: 0 },
        { name: 'religion', type: 'int', defaultValue: 0 },
        { name: 'sleightOfHand', type: 'int', defaultValue: 0 },
        { name: 'stealth', type: 'int', defaultValue: 0 },
        { name: 'survival', type: 'int', defaultValue: 0 },

        { name: 'copperPieces', type: 'int', defaultValue: 0 },
        { name: 'silverPieces', type: 'int', defaultValue: 0 },
        { name: 'electrumPieces', type: 'int', defaultValue: 0 },
        { name: 'goldPieces', type: 'int', defaultValue: 0 },
        { name: 'platinumPieces', type: 'int', defaultValue: 0 },
    ],
    validators: {
        armorBonus: [{ type: 'bound', min: 0 }],

        strength: [{ type: 'presence' }, { type: 'bound', min: 1, max: 30 }],
        dexterity: [{ type: 'presence' }, { type: 'bound', min: 1, max: 30 }],
        constitution: [
            { type: 'presence' },
            { type: 'bound', min: 1, max: 30 },
        ],
        intelligence: [
            { type: 'presence' },
            { type: 'bound', min: 1, max: 30 },
        ],
        wisdom: [{ type: 'presence' }, { type: 'bound', min: 1, max: 30 }],
        charisma: [{ type: 'presence' }, { type: 'bound', min: 1, max: 30 }],

        experience: [{ type: 'presence' }, { type: 'bound', min: 0 }],

        acrobatics: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        animalHandling: [
            { type: 'presence' },
            { type: 'bound', min: 0, max: 2 },
        ],
        arcana: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        athletics: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        deception: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        history: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        insight: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        intimidation: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        investigation: [
            { type: 'presence' },
            { type: 'bound', min: 0, max: 2 },
        ],
        medicine: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        nature: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        perception: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        performance: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        persuasion: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        religion: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        sleightOfHand: [
            { type: 'presence' },
            { type: 'bound', min: 0, max: 2 },
        ],
        stealth: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        survival: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],

        copperPieces: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        silverPieces: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        electrumPieces: [
            { type: 'presence' },
            { type: 'bound', min: 0, max: 2 },
        ],
        goldPieces: [{ type: 'presence' }, { type: 'bound', min: 0, max: 2 }],
        platinumPieces: [
            { type: 'presence' },
            { type: 'bound', min: 0, max: 2 },
        ],
    },
});
