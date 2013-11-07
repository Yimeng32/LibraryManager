
Ext.define('MyDesktop.modules.BaseInfoWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
    	'MyDesktop.modules.Tree',
        'MyDesktop.modules.store.ReaderInfoStore',
        'MyDesktop.modules.store.TreeStore'
    ],
    
    id:'baseInfo-win',

    init : function(){
        this.launcher = {
            text: '基础信息维护',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('baseInfo-win');
        if(!win){
            win = desktop.createWindow({
                id: 'baseInfo-win',
                title:'基础信息维护',
                width:1200,
                height:580,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
			    defaults:{
			        border: false,
			        bodyPadding: 0
			    },
                items: [{
			    	region: 'west',
			    	xtype: 'leftTreePanel',
			    	store:  new MyDesktop.modules.store.TreeStore()
			    },{
			    	region: 'center',
			        id : 'pagesPanel',
			        title:'基础信息',
			        frame:true,
			        layout: 'fit',
			        xtype:'panel'
			    }]
            });
        }
//        gridstore.load();
        return win;
    }
});

