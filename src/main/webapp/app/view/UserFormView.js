Ext.define('Fiddle.view.UserFormView', {
    extend : 'Ext.form.Panel',
    alias : 'widget.userformview',
    bodyPadding: 5,
    frame: true,
    width: 350,

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
            fieldLabel: 'ID',
            name: 'Id',
            allowBlank: false
        },{
            fieldLabel: 'Name',
            name: 'name',
            allowBlank: false
        },{
            fieldLabel: 'First Name',
            name: 'firstName',
            allowBlank: false
        },{
            fieldLabel: 'Middle Name',
            name: 'middleName',
            allowBlank: true
        },{
            fieldLabel: 'Last Name',
            name: 'lastName',
            allowBlank: false
        },{
            xtype: 'combo',
            fieldLabel: 'Gender',
            name: 'gender',
            value: 'Male',
            store: ['Male','Female','Others']
        },{
            fieldLabel: 'Age',
            name: 'age',
            allowBlank: false
        },{
            fieldLabel: 'Birth Date',
            name: 'birthDate',
            allowBlank: false
        },{
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            vtype: 'email',
            emptyText: 'abc@example.com'
        },{
            fieldLabel: 'Mobile',
            name: 'mobile',
            allowBlank: false,
            vtype: 'phone'
        },{
            xtype: 'combo',
            fieldLabel: 'Known Languages',
            name: 'knownLanguages',
            value: 'English',
            store: ['English','Hindi','Tamil']
        }],

    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true
    }],
    initComponent : function() {
        this.callParent();
    }
});