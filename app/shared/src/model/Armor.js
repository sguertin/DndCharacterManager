Ext.define('DndCharacterManager.model.Armor', {
    extends: 'DndCharacterManager.model.Item',

    fields: [
        { name: 'armorClass', type: 'string' },
        // Light, Medium, Heavy
        { name: 'armorType', type: 'string' },
        { name: 'strengthRequirement', type: 'string', defaultValue: '--' },
        { name: 'stealthDisadvantage', type: 'bool', defaultValue: false },
    ],
    validators: {
        armorClass: [{ type: 'presence' }],
        armorType: [
            { type: 'presence' },
            { type: 'inclusion', list: ['None', 'Light', 'Medium', 'Heavy'] },
        ],
    }
});
