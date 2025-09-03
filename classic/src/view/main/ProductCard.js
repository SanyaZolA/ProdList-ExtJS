Ext.define('ProdListExtJS.view.main.ProductCardForm', {
    extend: 'Ext.form.Panel',
    xtype: 'productcardform',

    defaults: {
        anchor: '100%', 
        allowBlank: false 
    },

    items: [
        {
            xtype: 'displayfield',
            name: 'id',
            fieldLabel: 'ID'
        },
        {
            xtype: 'displayfield',
            name: 'description',
            fieldLabel: 'Наименование'
        },
        {
            xtype: 'numberfield',
            name: 'price',
            fieldLabel: 'Цена',
            minValue: 0,
            decimalPrecision: 2
        },
        {
            xtype: 'numberfield',
            name: 'quantity',
            fieldLabel: 'Кол-во',
            minValue: 0,
            allowDecimals: false
        }
    ],

    buttons: [
        {
            text: 'Отмена',
            handler: function(btn) {
                btn.up('form').getForm().reset();
                btn.up('form').up('window')?.close();
            }
        },
        {
            text: 'Сохранить',
            handler: function(btn) {
                const form = btn.up('form').getForm();
                const record = form.getRecord();
                if (!record) return;
                if (form.isDirty()) {
                    Ext.Msg.confirm('Подтверждение', 'Есть изменённые данные. Сохранить?', function(choice) {
                        if (choice === 'yes') {
                            const values = form.getValues();
                            record.set(values);
                            btn.up('form').up('window')?.close();
                        }
                    });
                } else {
                    btn.up('form').up('window')?.close();
                }
            }
        }
    ],

    loadRecordToForm: function(record) { 
        this.getForm().loadRecord(record);
    }
});
