Ext.define ("Highcharts.ChartsDesktopConfig", {
    singleton: true,
    config : {
        spline : {
            series : [{
                dataIndex : 'yesterday',
                name : 'Yesterday'
            }, {
                dataIndex : 'today',
                name : 'Today'
            }],
            height : 500,
            width : 700,
            xField : 'time',
            chartConfig : {
                chart : {
                    marginRight : 130,
                    marginBottom : 120,
                    zoomType : 'x',
                    type: 'spline'
                },
                title : {
                    text : 'Highcharts (' + Highcharts.version + ') Example For ExtJs ' + Ext.versions.core.version,
                    x : -20 //center
                },
                subtitle : {
                    text : 'Random Value',
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
                        formatter : function () {
                            var dt = Ext.Date.parse (parseInt (this.value) / 1000, "U");
                            if (dt) {
                                return Ext.Date.format (dt, "H:i:s");
                            }
                            return this.value;
                        }

                    }
                }],
                yAxis : {
                    title : {
                        text : 'Temperature'
                    },
                    plotLines : [{
                        value : 0,
                        width : 1,
                        color : '#808080'
                    }]
                },
                tooltip : {
                    formatter : function () {
                        var dt = Ext.Date.parse (parseInt (this.x) / 1000, "U");
                        return 'At <b>' + this.series.name + '</b>' + Ext.Date.format (dt, "H:i:s") + ',<br/>temperature is : ' + this.y;
                    }

                },
                legend : {
                    layout : 'vertical',
                    align : 'right',
                    verticalAlign : 'top',
                    x : -10,
                    y : 100,
                    borderWidth : 0
                },
                credits : {
                    text : 'joekuan.wordpress.com',
                    href : 'http://joekuan.wordpress.com',
                    style : {
                        cursor : 'pointer',
                        color : '#707070',
                        fontSize : '12px'
                    }
                }
            }
        }
    }, // config

    constructor: function(config) {
	    this.initConfig(config);
	    return this;
    }
});