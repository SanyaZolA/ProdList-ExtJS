Ext.define('ProdList-ExtJS.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ProdList-ExtJS.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },

    tbar: [
            {
            xtype: 'textfield',
            fieldLabel: 'ID товара',
            listeners: {
                specialkey: function(field, e) {
                if (e.getKey() === e.ENTER) {
                    const grid = field.up('grid');
                    const store = grid.getStore();
                    if (!field.value) {                                 // Для возвращения списку
                        store.getFilters().removeAtKey('filterID');
                        return;
                    }
                    if (field.value) {
                        grid.getStore().addFilter({
                            id: 'filterID',
                            property: 'id',
                            value: field.value,
                            exactMatch: true
                        });
                    }
                }
            }
        }
    },
        {
            xtype: 'textfield',
            fieldLabel: 'Описание',
            listeners: {
                specialkey: function(field, e) {
                if (e.getKey() === e.ENTER) {
                    const grid = field.up('grid');
                    const store = grid.getStore();

                    if (!field.value) {
                        store.getFilters().removeAtKey('filterDES');
                        return;
                    }
                    if (field.value) {
                        grid.getStore().addFilter({
                            id: 'filterDES',
                            filterFn: function(record) {
                                return record.get('description')
                                    .toLowerCase()
                                    .includes(field.value.toLowerCase());
                            }
                        });
                    }
                }
            }
        }
    }
],

    columns: [
        { text: 'ID',  dataIndex: 'id', xtype: 'numbercolumn', format: '0' },
        { text: 'Имя',  dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price', xtype: 'numbercolumn', format: '0.00'},
        { text: 'Кол-во', dataIndex: 'quantity', xtype: 'numbercolumn', renderer: function(value, meta) {
            if (value === 0) {
                meta.tdCls += ' no-product-status';
            }
            return value;
        }}
    ],

    listeners: {
        cellclick: function(grid, td, cellIndex, record) {
            const column = grid.headerCt.getHeaderAtIndex(cellIndex);
            if (column.dataIndex === 'name') {
                Ext.create('Ext.window.Window', {
                    title: `Карточка товара ${record.get('name')}`,
                    modal: true,
                    items: [{
                        xtype: 'productcardform',
                        record: record,
                        listeners: {
                            beforerender: function(form) {
                                form.loadRecordToForm(record);
                            }
                        }
                    }]
                }).show();
            }
        }
    }
    
});
