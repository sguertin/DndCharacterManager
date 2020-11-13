Ext.define('DndCharacterManager.view.AbilityScores', {
    extend: 'Ext.Container',
    requires: ['DndCharacterManager.view.Ability'],
    xtypes: 'ability-scores',
    
    config: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
    },
    publishes: [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'charisma',
    ],
    viewModel: {
        data: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,
        },
    },
    layout: 'vbox',
    items: [
        {
            xtype: 'ability',
            fieldLabel: 'Strength',
            bind: {
                score: '{strength}',
            },
        },
        {
            xtype: 'ability',
            fieldLabel: 'Dexterity',
            bind: {
                score: '{dexterity}',
            },
        },
        {
            xtype: 'ability',
            fieldLabel: 'Constitution',
            bind: {
                score: '{constitution}',
            },
        },
        {
            xtype: 'ability',
            fieldLabel: 'Intelligence',
            bind: {
                score: '{intelligence}',
            },
        },
        {
            xtype: 'ability',
            fieldLabel: 'Wisdom',
            bind: {
                score: '{wisdom}',
            },
        },
        {
            xtype: 'ability',
            fieldLabel: 'Wisdom',
            bind: {
                score: '{wisdom}',
            },
        },
    ],
});
