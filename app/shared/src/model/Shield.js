Ext.define('DndCharacterManager.model.Shield', {
    extends: 'DndCharacterManager.model.Item',

    fields: [{ name: 'shieldBonus', type: 'int', defaultValue: 2 }],
    validators: {
        shieldBonus: [{ type: 'presence' }],
    },
});
