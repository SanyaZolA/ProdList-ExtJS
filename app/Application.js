Ext.define('ProdList-ExtJS.Application', {
    extend: 'Ext.app.Application',

    name: 'ProdList-ExtJS',
    views: [
        'ProdList-ExtJS.view.login.Login',
        'ProdList-ExtJS.view.main.Main'
    ],
    launch: function () {
        Ext.create('ProdList-ExtJS.view.login.Login');
    }
});