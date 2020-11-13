Ext.define('DndCharacterManager.model.ClassLevel', {
    extend: 'DndCharacterManager.model.Base',
    requires: ['DndCharacterManager.model.Character'],

    fields: [
        { name: 'className', type: 'string' },
        { name: 'subClassName', type: 'string' },
        { name: 'level', type: 'int', defaultValue: 1 },
        { name: 'characterId', reference: 'Character', type: 'int' },
    ],
    validators: {
        className: [{ type: 'presence' }],
        characterId: [{ type: 'presence' }],
        level: [{ type: 'presence' }, { type: 'number' }],
    },
});
