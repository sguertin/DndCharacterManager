Ext.define('DndCharacterManager.view.CharacterClassField', {
    extend: 'Ext.Container',
    xtype: 'characterclassfield',

    layout: 'hbox',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Class(es):',
            editable: false,
            bind: {
                value: '{classDisplayText}',
            },
        },
    ],
    viewModel: {
        data: {
            character: null,
        },
        formulas: {
            classDisplayText: (get) => {
                let character = get('character'),
                    text = '';
                if (character) {
                    character.classLevels((classLevel) => {
                        if (text.length > 0) {
                            text += ' / ';
                        }
                        text += classLevel.className;
                        if (classLevel.subClassName) {
                            text += ' (' + classLevel.subClassName + ')';
                        }
                        text += ' ' + classLevel.level;
                    });
                }
                return text;
            },
        },
    },
    config: {
        character: null,
    },
    publishes: ['character'],
    bind: {
        character: '{character}',
        deep: true,
    },
});
