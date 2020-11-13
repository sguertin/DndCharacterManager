Ext.define('DndCharacterManager.util.Common', {
    alternateClassName: ['Common'],
    singleton: true,

    getModifier: (score) => Math.floor((score - 10) / 2),

    getProficiency: (level) => 2 + Math.floor((level - 1) / 4),

    log: (msg) => console.log(msg),
});
