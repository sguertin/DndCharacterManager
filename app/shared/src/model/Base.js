Ext.define('DndCharacterManager.model.Base', {
    extend: 'Ext.data.Model',

    fields: [{ name: 'id', type: 'int' }],

    schema: {
        namespace: 'DndCharacterManager.model',
        proxy: {
            type: 'localstorage',
            id: '{entityName}Entities',
        },
    },
});
