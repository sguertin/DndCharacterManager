Ext.define('DndCharacterManager.model.Weapon', {
    extends: 'DndCharacterManager.model.Item',

    fields: [
        { name: 'damage', type: 'string' },
        { name: 'range', type: 'string' },
    ],
    validators: {
        damage: [{ type: 'presence' }],
    },
});
