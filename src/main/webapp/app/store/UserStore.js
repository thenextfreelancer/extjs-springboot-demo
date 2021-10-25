Ext.define('Fiddle.store.UserStore',{
    extend: 'Ext.data.Store',
    storeId: 'userstore',
    model: 'Fiddle.model.UserFields',
    sorters: { property: 'age', direction: 'ASC' },
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://my-json-server.typicode.com/thenextfreelancer/mydbdata/data',
        reader: {   // Ext.data.reader.Json
            type: 'json',
            rootProperty: ''
        }
    }
});