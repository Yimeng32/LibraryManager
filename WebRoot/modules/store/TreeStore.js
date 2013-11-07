Ext.define("MyDesktop.modules.store.TreeStore", {
	extend : 'Ext.data.TreeStore',
	requires: [
        'MyDesktop.modules.model.TreeModel'
    ],
	model:'MyDesktop.modules.model.TreeModel',	
	root:{
		expanded:true,
		name:'root'/*,
		children:[{
			text:'菜单',
			expanded:true,
			name:'forms',
			children:[
				{leaf:true,text:'登录',name:'login'},
				{leaf:true,text:'联系',name:'contact'},
				{leaf:true,text:'注册',name:'register'}
			]
		},{
			text:'工具条',
			expanded:true,
			name:'toolbars',
			children:[
				{leaf:true,text:'Basic Toolbar',name:'BasicToolbar'},
				{leaf:true,text:'Docked Toolbar',name:'DockedToolbar'}
			]
		}]*/
	},
	proxy:{
//		type:'ajax',
//		url:'menu.action',
		type : 'ajax',
		url: 'data/tree.json',
		reader:{
			type:'json'
		},
		success : function(form, action) {  
            alert("success"); 
        },
        failure : function(form, action) {  
        	alert("");
        }  
	},
	autoLoad:true
});