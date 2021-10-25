Ext.define('Fiddle.model.HighChartData', {
    extend : 'Ext.data.Model',
    fields : [{
      name : 'time',
      type : 'string'
    }, {
      name : 'yesterday',
      type : 'float'
    }, {
      name : 'today',
      type : 'float'
    }]
  });