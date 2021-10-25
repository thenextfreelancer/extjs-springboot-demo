
Ext.Loader.setPath('Chart', '../resources/Chart');
Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.SplineSerie');

Ext.application({
    name : 'Fiddle',
    namespaces: ['Fiddle'],
    views:['Fiddle.view.Viewport'],
    autoCreateViewport: true,
    launch : function() {
        Ext.Msg.alert('Fiddle', 'Welcome to Sencha Fiddle!');
        this.callParent()
    }
});