Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Список товаров',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Имя',  dataIndex: 'name' },
        { text: 'Описание', dataIndex: 'email', flex: 1 },
        { text: 'Цена', dataIndex: 'email', flex: 1 },
        { text: 'Количество', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
    
});
