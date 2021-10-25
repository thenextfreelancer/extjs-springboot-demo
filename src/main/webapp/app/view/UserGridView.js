Ext.define('Fiddle.view.UserGridView', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.usergridview',
    emptyText: 'No records',
    frame: true,
    title: 'Application Users',
    
    dockedItems: [{
            xtype: 'toolbar',
            padding: 4,
            margin: 0,
            items: [{
                xtype: 'button',
                tooltip: 'Add User',
                text: 'Add User',
                width: 60,
                handler: function(){
                    var formWindow = Ext.create('Fiddle.view.UserFormWindow');
                    formWindow.show();
                }
            }]      
    }],
    columns: [
        {
            dataIndex: 'Id',
            text: 'Id'
        }, {
            dataIndex: 'age',
            text: 'Age',
            renderer: function (value, metaData) {
                if (parseInt(value) <= 18) {
                    metaData.tdStyle = 'background-color:#00ff00';
                } else if (parseInt(value) > 18 && parseInt(value) <= 35){
                    metaData.tdStyle = 'background-color:#0000ff';
                } else {
                    metaData.tdStyle = 'background-color:#ff0000';
                }
                return value
            }
        }, {
            dataIndex: 'gender',
            text: 'Gender'
        }, {
            dataIndex: 'name', //This field does not exist in problem model but it is added manually and mapped to impactState bcoz of blank/null handling
            text: 'Name'
        }, {
            dataIndex: 'firstname',
            text: 'First Name'
        }, {
            dataIndex: 'middleName',
            text: 'Middle Name'
        }, {
            dataIndex: 'lastName',
            text: 'Last Name'
        }, {
            dataIndex: 'birthDate',
            text: 'Birth Date'
        }, {
            dataIndex: 'email',
            text: 'Email'
        }, {
            dataIndex: 'mobile',
            text: 'Mobile'
        }, {
            dataIndex: 'knownLanguages',
            text: 'Known Languages'
        }
    ],

    initComponent : function() {
        var store =  
        this.callParent();
    }
});