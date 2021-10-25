Ext.define('Fiddle.view.UserListViewController', {
    extend: 'Ext.app.ViewController',
    requires:['Fiddle.view.UserFormWindow', 'Fiddle.view.UserFormView','Fiddle.view.highcharts.HighChartView'],
    alias: 'controller.user-list',
    onAddClick: function (sender, record) {
        var _userStore = this.getView().getStore();
        var formWindow = Ext.create('Fiddle.view.UserFormWindow', {
            width: 300,
            layout: { align: 'stretch', type: 'vbox' },
            title: 'Add User',
            items: [{
                xtype: 'userformview',
                gridStore: _userStore
            }],
            listeners: {
                close: function(){
                    _userStore.load();
                }
            }
        });
        formWindow.show();
    },

    onChartShowClick: function(){
        var formWindow = Ext.create('Fiddle.view.UserFormWindow', {
            width: 500,
            height: 500,
            title: 'High Chart',
            layout: { align: 'stretch', type: 'vbox' },
            items: [{
                xtype: 'highchartview'
            }],
            listeners: {
                close: function(){
                    
                }
            }
        });
        formWindow.show();
    },

    onRemoveClick: function (sender, record) {
        var userGrid = this.getView();
        var userStore = userGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = userGrid.getSelectionModel().getSelection();
        var id = selectedRows[0].id;
        Ext.Msg.show({
            title: 'Delete',
            msg: 'Are you sure? ',
            width: 300,
            closable: false,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonValue, inputText, showConfig) {
                if (buttonValue === 'yes') {
                    Ext.Ajax.request({
                        url : '/user/' + id,
                        method : 'DELETE',
                        appendId : true,
                        success : function(response, opts) {
                            try {
                                var msg = 'User deleted successfully.';
                                if(response.responseText)
                                {
                                    var resp = Ext.decode(response.responseText);
                                    msg = resp.message;
                                }
                                
                                userStore.remove(selectedRows);
                                Ext.Msg.alert('Success', msg);
                            }
                            catch (ex) {
                                Ext.Msg.alert('Status', 'Exception: ' + ex);
                            }
                        },
                        failure : function(response, opts) {
                            var error = "";
                            if(response.responseText)
                            {
                                var resp = Ext.decode(response.responseText);
                                error = resp.error;
                            }
                            else
                            {
                                error = 'Unknown Server Error.'
                            }
                            Ext.Msg.alert('Failure', response.status +':'+error);
                        }
                    });
                }
            }
        });
    },

    onSelectionChange: function (grid, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveUser');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    },

    onEditUser: function ( grid, record, element, rowIndex, e, eOpts ) {
        var _userStore = grid.getStore();
        var formWindow = Ext.create('Fiddle.view.UserFormWindow', {
            width: 300,
            title: 'Edit User',
            layout: { align: 'stretch', type: 'vbox' },
            items: [{
                xtype: 'userformview',
                gridStore: _userStore,
                record: record
            }],
            listeners: {
                close: function(){
                    _userStore.load();
                }
            }
        });
        formWindow.show();
    }
});