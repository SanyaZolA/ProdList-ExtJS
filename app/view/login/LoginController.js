Ext.define('ProdList-ExtJS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

onLoginClick: function (button) {
        const form = this.lookupReference('form').getForm();
        const values = form.getValues();
        if (values.username !== 'admin' || values.password !== 'padmin') {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
            return;
        }
        const win = button.up('window');
        win.close();
        Ext.create('ProdList-ExtJS.view.main.Main');
}
});