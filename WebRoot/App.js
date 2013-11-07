/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.App', {
    extend: 'Ext.ux.desktop.App',

   	requires: [
        'Ext.window.MessageBox',
        'Ext.ux.desktop.ShortcutModel',
        
        'MyDesktop.modules.SystemStatus',
        'MyDesktop.modules.VideoWindow',
        'MyDesktop.modules.GridWindow',
        'MyDesktop.modules.TabWindow',
        'MyDesktop.modules.AccordionWindow',
        'MyDesktop.modules.Notepad',
        'MyDesktop.modules.BogusMenuModule',
        'MyDesktop.modules.BogusModule',
        
        'MyDesktop.modules.BaseInfoWindow',
        
        'MyDesktop.Settings'
    ],

    init: function() {
        // custom logic before getXYZ methods get called...
        this.callParent();
        // now ready...
    },
    
    getModules : function(){
        return [
            new MyDesktop.modules.VideoWindow(),
            new MyDesktop.modules.SystemStatus(),
            new MyDesktop.modules.GridWindow(),
            new MyDesktop.modules.TabWindow(),
            new MyDesktop.modules.AccordionWindow(),
            new MyDesktop.modules.Notepad(),
            new MyDesktop.modules.BogusMenuModule(),
            new MyDesktop.modules.BogusModule(),
            
            new MyDesktop.modules.BaseInfoWindow()
        ];
    },

	getDesktopConfig: function () {
	    var me = this, ret = me.callParent();
	
	    return Ext.apply(ret, {
	        //cls: 'ux-desktop-black',
	
	        contextMenuItems: [{ 
	        	text: 'Change Settings', 
	        	handler : me.onSettings, 
	        	scope: me 
	        }],
	
	        shortcuts: Ext.create('Ext.data.Store', {
	            model: 'Ext.ux.desktop.ShortcutModel',
	            data: [{ 
	            	name: '权限管理', 
	            	iconCls: 'access-manage', 
	            	module: 'acc-win' 
	            },{ 
	            	name: '基础信息维护', 
	            	iconCls: 'baseinfo-manage', 
	            	module: 'baseInfo-win' 
	            },{ 
	            	name: '新书订购管理', 
	            	iconCls: 'newbook-manage', 
	            	module: 'notepad' 
	            },{ 
	            	name: '图书借阅管理', 
	            	iconCls: 'book-borrow-manage',
	            	module: 'systemstatus'
	            },{ 
	            	name: '统计打印', 
	            	iconCls: 'printer-paper',
	            	module: 'systemstatus'
	            },{ 
	            	name: '系统管理', 
	            	iconCls: 'sys-manage',
	            	module: 'systemstatus'
	            }]
	        }),
	
	        wallpaper: 'resources/wallpapers/Wood-Sencha.jpg',
	        wallpaperStretch: false
	    });
	},
	
	// config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: '图书管理系统',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [{
                    text:'Settings',
                    iconCls:'settings',
                    handler: me.onSettings,
                    scope: me
                },
                '-',
                {
                    text:'Logout',
                    iconCls:'logout',
                    handler: me.onLogout,
                    scope: me
                }]
            }
        });
    },
    
    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [{ 
            	name: '权限管理', 
            	iconCls: 'accordion', 
            	module: 'acc-win' 
            },{ 
            	name: '基础信息维护', 
            	iconCls: 'icon-grid', 
            	module: 'grid-win' 
            }],
            trayItems: [{ 
            	xtype: 'trayclock', 
            	flex: 1 
            }]
        });
    },

    onLogout: function () {
        Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
    },

    onSettings: function () {
        var dlg = new MyDesktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
   
});
