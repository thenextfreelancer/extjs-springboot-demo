Ext.application({
    name : 'Fiddle',
    namespaces: ['Fiddle'],
    models: ['Fiddle.model.UserFields'],
    stores:['Fiddle.store.UserStore'],
    views:['Fiddle.view.Viewport'],
    autoCreateViewport: true,
    launch : function() {
        Ext.Msg.alert('Fiddle', 'Welcom3e to Sencha Fiddle!');
        this.callParent()
    }
});