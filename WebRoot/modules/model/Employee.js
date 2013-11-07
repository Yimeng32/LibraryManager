//User类
Ext.define("MyDesktop.modules.model.Employee",{

	extend:'Ext.data.Model',
	fields:[
		{name:'id',type:'int',sortable:true},
		{name:'name',type:'string',sortable:true},
		{name:'age',type:'int',sortable:true},
		{name:'sex',type:'string',sortable:true},
		{name:'birthday',type:'string',sortable:true},
		{name:'email',type:'string',sortable:true},
		{name:'hiredate',type:'string',sortable:true},
		{name:'salary',type:'string',sortable:true}
	]
	
})