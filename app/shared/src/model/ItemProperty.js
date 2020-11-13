Ext.define('DndCharacterManager.model.ItemProperty', {
    extends: 'DndCharacterManager.model.Item',

    fields: [{ name: 'itemId', reference: 'Item', type: 'int' }],
    validators: {
        itemId: [{ type: 'presence' }],
    },
});
