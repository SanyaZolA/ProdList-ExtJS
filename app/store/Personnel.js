Ext.define('ProdList-ExtJS.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'ProdList-ExtJS.model.Personnel',

    data: { items: [
        { id: 1, name: 'Keenetic', description: "роутер 4К Mega", price: 12, quantity: 1 },
        { id: 2, name: 'HP',     description: "Компьютер 4G", price: 100, quantity: 2 },
        { id: 3, name: 'iPhone',   description: "Смартфон Pro", price: 50, quantity: 2 },
        { id: 4, name: 'Лампа',   description: "Xiomi m1", price: 50, quantity: 0 },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
