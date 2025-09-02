Ext.define('ProdList-ExtJS.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'ProdList-ExtJS.model.Personnel',

    data: { items: [
        { id: 1, name: 'Keenetic', description: "роутер", price: 12, quantity: 1 },
        { id: 2, name: 'HP',     description: "компьютер", price: 100, quantity: 2 },
        { id: 3, name: 'iPhone',   description: "Смартфон", price: 50, quantity: 2 },
        { id: 4, name: 'Лампа',   description: "Xiomi", price: 50, quantity: 0 },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
