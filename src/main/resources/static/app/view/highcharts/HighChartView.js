Ext.define('Fiddle.view.highcharts.HighChartView', {
    extend : 'Ext.form.Panel',
    alias : 'widget.highchartview',
    requires:['Fiddle.model.HighChartData'],
    seriesNum: 2,
    initComponent : function() {
      var me = this;
      var store = Ext.create('Ext.data.Store', {
          model : 'Fiddle.model.HighChartData',
          proxy : {
            type : 'ajax',
            url : './data/standalone.json',
            reader : {
              type : 'json',
              rootProperty : 'rows'
            }
          },
          autoLoad : true
        });
        Ext.apply(this,{
            height: 500,
            tbar : [{
              xtype : 'button',
              text : 'Add series',
              handler : function() {
                var chart = Ext.getCmp('chart');
                chart.addSeries([ me.genSeries() ], true);
              }
            }],
            items : [{
                xtype : 'highchart',
                id : 'chart',
                defaultSerieType : 'spline',
                series : [{
                  dataIndex : 'yesterday',
                  name : 'Yesterday',
                  visible : true
                }, {
                  dataIndex : 'today',
                  name : 'Today',
                  visible : true
                }],
                store : store,
                xField : 'time',
                chartConfig : {
                  chart : {
                    type: 'spline',
                    zoomType : 'x',
                    animation : {
                      duration : 1500,
                      easing : 'swing'
                    }
                  },
                  title : {
                    text : 'Highcharts',
                    x : -20 //center
                  },
                  subtitle : {
                    text : 'Random value',
                    x : -20
                  },
                  xAxis : [{
                    title : {
                      text : 'Time',
                      margin : 20
                    },
                    labels : {
                      rotation : 270,
                      y : 35,
                      formatter : function() {
                        if( typeof this.value == 'string') {
                          var dt = Ext.Date.parse(parseInt(this.value) / 1000, "U");
                          return Ext.Date.format(dt, "H:i:s");
                        } else {
                          return this.value;
                        }
                      }
        
                    }
                  }],
                  yAxis : {
                    title : {
                      text : 'Value'
                    },
                    plotLines : [{
                      value : 0,
                      width : 1,
                      color : '#808080'
                    }]
                  },
                  plotOptions : {
                    series : {
                      animation : {
                        duration : 3000,
                        easing : 'swing'
                      }
                    }
                  },
                  tooltip : {
                    formatter : function() {
                      return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y;
                    }
        
                  },
                  credits : {
                    href : 'https://www.orbitanalytics.com/',
                    text : 'www.orbitanalytics.com'
                  },
                  legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                  }
                }
              }]
        });
        this.callParent(arguments);
    },
    
   genSeries: function() {
      var temps = [];
      for(var i = 0; i < 20; i++) {
        temps[i] = randomFromTo(15, 30);
      }

      var series = {
        type : 'spline',
        name : this.seriesNum + ' days ago',
        data : temps
      };
      
      this.seriesNum++;
      function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
      };
      return series;
    }
});