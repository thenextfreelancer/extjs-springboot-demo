Ext.define('Fiddle.view.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userviewmodel',
    requires:['Fiddle.model.UserFields'],
    stores: {
        UserListPagingStore: {
            model: 'Fiddle.model.UserFields',
            pageSize: 5,
            autoLoad: true,
            autoSync: false,
            proxy:
            {
                appendId: false,
                type: 'rest',
                reader:
                {
                    rootProperty: 'users',
                    type: 'json'
                },
                url: '/user',
                writer: {
                    type: 'json',
                    dateFormat: 'd/m/Y',
                    writeAllFields: true
                }
            }
        }

    }
});