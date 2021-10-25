Ext.define('Fiddle.view.UserFormView', {
    extend : 'Ext.form.Panel',
    alias : 'widget.userformview',
    bodyPadding: 5,
    frame: true,
    width: 350,
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    gridStore: null,
    record: null,
    defaultType: 'textfield',
    trackResetOnLoad: true,
    validatePhone: function(form){
        var values = form.getValues();
        var reg = /^[+00-9]{0,3}-{0,1}[0-9]{8,10}$/;
        if(!reg.test(values.mobile)){
            Ext.Msg.alert('Error','Mobile is not in correct format.');
            return false;
        }
        return true;
    },
    initComponent : function() {
        var me = this;
        var gender = Ext.create('Ext.data.Store', {
            fields: ['value', 'name'],
            data : [{"value": 1, "name":"Male"},
            { "value":2, "name":"Female"},
            { "value":3, "name":"Other"}]
        });
        Ext.apply(this,{
            items: [{
                fieldLabel: 'ID',
                name: 'id',
                maskRe: /[0-9]/,
                allowBlank: false,
                readOnly: !!me.record,
                maxLength: 10,
                enforceMaxLength: true,
                maxValue: 2147483646
            },{
                fieldLabel: 'Name',
                name: 'name',
                itemId: 'newUserName',
                allowBlank: false,
                readOnly: !!me.record,
                maxLength: 45,
                enforceMaxLength: true
            },{
                fieldLabel: 'First Name',
                name: 'firstName',
                allowBlank: false,
                maxLength: 15,
                enforceMaxLength: true
            },{
                fieldLabel: 'Middle Name',
                name: 'middleName',
                allowBlank: true,
                maxLength: 15,
                enforceMaxLength: true
            },{
                fieldLabel: 'Last Name',
                name: 'lastName',
                allowBlank: false,
                maxLength: 15,
                enforceMaxLength: true
            },{
                xtype: 'combo',
                fieldLabel: 'Gender',
                name: 'gender',
                queryMode: 'local',
                value: 1,
                displayField: 'name',
                valueField: 'value',
                store: gender
            },{
                fieldLabel: 'Age',
                name: 'age',
                maskRe: /[0-9]/,
                maxValue: 100,
                allowBlank: false,
                maxLength: 2,
                enforceMaxLength: true,
                emptyText: '0-99'
            },{
                xtype: 'datefield',
                anchor: '100%',
                fieldLabel: 'Birth Date',
                name: 'birthDate',
                format: 'd/m/Y',
                altFormats: 'd-m-Y|d.m.Y',
                maxValue: new Date()
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
                maskRe: /[0-9+-]+/,
                maxLength: 15,
                minLength: 7,
                enforceMaxLength: true,
                emptyText: '+99-9999999999'
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
                    me.getForm().reset();
                }
            }, {
                text: 'Submit',
                handler: function() {
                    
                    if(!me.record){ //edit mode
                        var name = me.down('#newUserName');
                        var match = me.gridStore.findRecord('name',name.value);
                        if(match)
                        {
                            name.focus();
                            Ext.Msg.alert('Error','Name already exist.');
                            return;
                        }
                    }
                    var form = me.getForm();
                    if(!me.validatePhone(form))
                    {
                        return false;
                    }
                    if (form.isValid()) {
                        form.submit({
                            url: '/user',
                            method: me.record ? 'PUT':'POST',
                            success: function(form, action) {
                                Ext.Msg.alert('Success', action.result.msg);
                                me.up('window').close();
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result.msg);
                                me.up('window').close();
                            }
                        });
                    }
                    
                }
            }],
            listeners: {
                afterrender: function() {
                    if(me.record)
                    {
                        me.getForm().loadRecord(me.record);
                    }
                        
                }
            }
        });
        this.callParent(arguments);
    }
});