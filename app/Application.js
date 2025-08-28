Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',
    views: [
        'MyApp.view.login.Login',
        'MyApp.view.main.Main'
    ],
    launch: function () {
        // При старте сразу открываем Login
        Ext.create('MyApp.view.login.Login');
    }
});