Ext.define('DndCharacterManager.view.SkilField', {
    extend: 'Ext.Container',
    xtype: 'skillfield',
    layout: 'hbox',

    items: [
        {
            xtype: 'label',
            bind: {
                html: '{fieldLabel}',
            },
        },
        {
            xtype: 'checkbox',
            fieldLabel: 'Proficient',
            bind: {
                checked: '{proficient}',
            },
            listeners: {
                uncheck: () => {
                    this.getViewModel().setData({ expertise: false });
                },
            },
        },
        {
            xtype: 'checkbox',
            fieldLabel: 'Expertise',
            bind: {
                checked: '{expertise}',
                enabled: '{proficient}',
            },
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Modifier',
            editable: false,
            bind: {
                value: '{modifier}',
            },
        },
    ],
    viewModel: {
        data: {
            fieldLabel: null,
            proficient: false,
            expertise: false,
            modifier: 0,
        },
    },
    config: {
        fieldLabel: null,
        proficient: false,
        expertise: false,
        modifier: 0,
    },
    publishes: ['fieldLabel', 'proficient', 'expertise', 'modifier'],
});
