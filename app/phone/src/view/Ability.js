Ext.define('DndCharacterManager.view.Ability', {
    extend: 'Ext.Container',
    alias: 'ability',
    requires: ['DndCharacterManager.util.Common'],

    config: {
        fieldLabel: '',
        score: 10,
    },
    viewModel: {
        data: {
            fieldLabel: '',
            score: 10,
        },
        formulas: {
            modifier: (get) => Common.getModifier(get('score')),
            modifierText: (get) => {
                let mod = get('modifier');
                if (mod <= 0) {
                    return mod.toString();
                } else {
                    return '+' + mod;
                }
            },
        },
    },
    items: [
        {
            xtype: 'label',
            bind: {
                html: '{fieldLabel}',
            },
        },
        {
            xtype: 'numberfield',
            cls: 'score-field',
            bind: {
                value: '{score}',
            },
        },
        {
            xtype: 'textfield',
            cls: 'modifier-field',
            editable: false,
            bind: {
                value: '{modifierText}',
            },
        },
    ],

    publishes: ['fieldLabel', 'score'],
});
