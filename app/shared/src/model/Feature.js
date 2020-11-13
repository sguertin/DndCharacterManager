Ext.define('DndCharacterManager.model.Feature', {
    extends: 'DndCharacterManager.model.Base',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'source', type: 'string' },
        { name: 'level', type: 'int' },
        { name: 'characterId', reference: 'Character', type: 'int' },
    ],
    validators: {
        name: [{ type: 'presence' }],
        characterId: [{ type: 'presence' }],
        source: [
            {
                type: 'inclusive',
                list: ['Background', 'Class', 'Feat', 'Race', 'Other'],
            },
        ],
    },
});
