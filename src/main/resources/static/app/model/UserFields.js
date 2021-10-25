Ext.define('Fiddle.model.UserFields',{
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'age', type: 'int' },
        { name: 'gender', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'firstName', type: 'string' },
        { name: 'middleName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'birthDate', type: 'date' },
        { name: 'email', type: 'string' },       
        { name: 'mobile', type: 'string' },       
        { name: 'knownLanguages', type: 'string' }       
    ]
});
