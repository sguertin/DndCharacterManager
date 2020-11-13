Ext.define('DndCharacterManager.view.Character', {
    extend: 'Ext.Container',
    xtype: 'character',
    requires: [
        'DndCharacterManager.view.CharacterClassField',
        'DndCharacterManager.view.CharacterModel',
        'DndCharacterManager.view.AbilityScores',
    ],
    controller: 'character',
    viewModel: {
        type: 'viewmodel.character',
    },
    layout: 'vbox',

    items: [
        {
            xtype: 'panel',
            items: [
                {
                    xtpye: 'textfield',
                    fieldLabel: 'Name',
                    bind: {
                        value: '{name}',
                    },
                },
                {
                    xtype: 'characterclassfield',
                    bind: {
                        character: '{character}',
                    },
                },
                {
                    xtype: 'tool',
                    iconCls: 'x-fa fa-pencil-square-o',
                    handler: 'editClasses',
                },
            ],
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'ability-scores',
                    bind: {
                        strength: '{strength}',
                        dexterity: '{dexterity}',
                        constitution: '{constitution}',
                        intelligence: '{intelligence}',
                        wisdom: '{wisdom}',
                        charisma: '{charisma}',
                    },
                },
            ],
        },
    ],
});
