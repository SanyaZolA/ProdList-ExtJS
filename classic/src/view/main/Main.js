Ext.define('ProdList-ExtJS.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',


    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ProdList-ExtJS.view.main.MainController',
        'ProdList-ExtJS.view.main.MainModel',
        'ProdList-ExtJS.view.main.List'
    ],

    controller: 'main',
    plugins: 'viewport',
    viewModel: 'main',

    ui: 'navigation',

    header: {
        layout: {
            align: 'stretchmax',
        },
        title: {
            'text': 'Учёт товаров',
        },
        items: [
            {
            xtype: 'button',
            text: 'Товары',
            iconCls: 'fa fa-box',
            margin: '10 0 10 10',
            handler: function() {
                const tabPanel = this.up('app-main');
                const newTab = tabPanel.add({title: 'Товары', xtype: 'mainlist', closable: true});
                tabPanel.setActiveTab(newTab);
                        }
                    },
            
            {
            xtype: 'button',
            text: 'Выход',
            iconCls: 'fa fa-sign-out-alt',
            margin: '10 10 10 10',
            handler: function () {
                const mainView = this.up('app-main'); 
                mainView.destroy();
                Ext.create({
                    xtype: 'login',
                    renderTo: Ext.getBody()
                });
            }
        }]

    },
    items: [
        {
            title: 'Товары',
            xtype: 'mainlist',
            closable: true
        },
    ]
});
