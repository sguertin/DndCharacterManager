Ext.define('DndCharacterManager.model.Item', {
    extends: 'DndCharacterManager.model.Base',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'quantity', type: 'int', defaultValue: 1 },
        { name: 'ownerId', reference: 'Character', type: 'int' },
        { name: 'weight', type: 'int' },
    ],
    validators: {
        name: [{ type: 'presence' }],
    },
});
