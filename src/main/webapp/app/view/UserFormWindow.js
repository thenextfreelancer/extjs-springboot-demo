Ext.define('Fiddle.view.UserFormWindow',{
    extend: 'Ext.window.Window',
    alias: 'widget.userformwindow',
    requires : ['Fiddle.view.UserFormView'],
    width: 300,
    resizable: false,
    constrainHeader: true,
    layout: { align: 'stretch', type: 'vbox' },
    modal: true,
    autoDestroy: true,
    title: 'Add user',
    items: [{
        xtype: 'userformview'
    }],
    initComponent : function() {
        this.callParent();
    }
});