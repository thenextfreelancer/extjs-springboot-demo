Ext.define('Fiddle.view.UserFormWindow',{
    extend: 'Ext.window.Window',
    alias: 'widget.userformwindow',
    resizable: false,
    constrainHeader: true,
    modal: true,
    autoDestroy: true,
    initComponent : function() {
        this.callParent(arguments);
    }
});