Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

onLoginClick: function (button) {
        const win = button.up('window');
        win.close(); // закрываем окно логина

        // показываем главное приложение
        Ext.create('MyApp.view.main.Main');
}
});