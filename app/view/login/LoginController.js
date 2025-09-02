Ext.define('ProdList-ExtJS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

onLoginClick: function (button) {
        const win = button.up('window');
        win.close();
        Ext.create('ProdList-ExtJS.view.main.Main');
}
});