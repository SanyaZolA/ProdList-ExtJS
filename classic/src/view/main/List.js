Ext.define('ProdList-ExtJS.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ProdList-ExtJS.store.Personnel'
    ],

    title: 'Список товаров',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Имя',  dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price'},
        { text: 'Кол-во', dataIndex: 'quantity', renderer: function(value, meta) {
            if (value === 0) {
                meta.tdCls += ' no-product-status';
            }
            return value;
        }}
    ],

    listeners: {
        select: 'onItemSelected'
    }
    
});
