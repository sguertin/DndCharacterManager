Ext.define('DndCharacterManager.view.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['DndCharacterManager.model.Character'],
    stores: {
        characters: {
            autoLoad: true,
            model: 'Character',
        },
    },
});
