Ext.define('Fiddle.view.UserGridView', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.usergridview',
    requires:['Fiddle.view.UserViewModel','Fiddle.view.UserListViewController'],
    emptyText: 'No records',
    title: 'Application Users',
    controller: 'user-list',
    viewModel: { type: 'userviewmodel' },
    selType: 'rowmodel',
    width: 1300,
    height: 500,
    selModel: {
        mode: 'SINGLE',
        pruneRemoved: false
    },
    selType: 'rowmodel',
    viewConfig:
    {
        stripeRows: true
    },
    bind: {
        store: '{UserListPagingStore}'
    },
    dockedItems: [{
            xtype: 'toolbar',
            padding: 4,
            margin: 0,
            items: [{
                text: 'Add User',
                iconCls: 'fa fa-plus',
                handler: 'onAddClick'
            }, {
                itemId: 'removeUser',
                text: 'Remove User',
                iconCls: 'fa fa-times',
                reference: 'btnRemoveUser',
                handler: 'onRemoveClick',
                disabled: true
            }, {
                itemId: 'showCharts',
                text: 'Charts',
                iconCls: 'fa fa-bar-chart',
                handler: 'onChartShowClick'
            }]      
    }],
    columns: [
        {
            dataIndex: 'id',
            text: 'ID'
        }, 
        {
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
            text: 'Gender',
            renderer: function (value, metaData) {
                if (parseInt(value) === 1) {
                    return 'Male';
                } else if (parseInt(value) === 2){
                    return 'Female';
                } else {
                    return 'Other';
                }
            }
        }, {
            dataIndex: 'name', //This field does not exist in problem model but it is added manually and mapped to impactState bcoz of blank/null handling
            text: 'Name'
        }, {
            dataIndex: 'firstName',
            text: 'First Name'
        }, {
            dataIndex: 'middleName',
            text: 'Middle Name'
        }, {
            dataIndex: 'lastName',
            text: 'Last Name'
        }, {
            xtype: 'datecolumn',
            header: "Birth Date",
            width: 135,
            dataIndex: 'birthDate',
            renderer: Ext.util.Format.dateRenderer('d/m/Y')
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

    bbar: [{
        xtype: 'pagingtoolbar',
        bind:{
            store: '{UserListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
        emptyMsg: "No records to display&nbsp;"
    }],
    listeners: {
        selectionchange: 'onSelectionChange',
        itemdblclick: 'onEditUser'
    },
    initComponent : function() {
        this.callParent(arguments);
    }
});