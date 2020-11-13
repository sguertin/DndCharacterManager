Ext.define('DndCharacterManager.model.Proficiency', {
    extend: 'DndCharacterManager.model.Base',
    requires: ['DndCharacterManager.model.Character'],

    fields: [
        { name: 'name', type: 'string' },
        { name: 'proficiencyType', type: 'string' },
        { name: 'level', type: 'int', defaultValue: 1 },
        { name: 'source', type: 'string' },
        { name: 'characterId', reference: 'Character', type: 'int' },
        { name: 'abilityScore', type: 'string' },
    ],
    validators: {
        abilityScore: [
            {
                type: 'inclusive',
                list: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
            },
        ],
        characterId: [{ type: 'presence' }],
        level: [{ type: 'bound', min: 1, max: 20 }],
        name: [{ type: 'presence' }],
        proficiencyType: [
            { type: 'presence' },
            {
                type: 'inclusive',
                list: ['Armor', 'Implement', 'Language', 'Tool', 'Weapon'],
            },
        ],
        source: [
            {
                type: 'inclusive',
                list: ['Background', 'Class', 'Race', 'Feat', 'Other'],
            },
        ],
    },
});
