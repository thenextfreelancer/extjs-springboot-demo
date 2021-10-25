Ext.define('Fiddle.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires : ['Fiddle.view.UserGridView'],
    layout : {
        align : 'stretch',
        type : 'vbox'
    },
    initComponent : function() {
        Ext.apply(this, {
            items : [{
                extend : 'Ext.container.Container',
                border : false,
                flex : 1,
                layout : {
                    type : 'vbox'
                },
                items : [
                    {
                        xtype: 'usergridview',
                        flex: 1
                    }
                ]
               
            }]
        });
        this.callParent();
    }
});