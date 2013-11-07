//ReaderInfo类
Ext.define("MyDesktop.modules.model.ReaderInfo",{

	extend:'Ext.data.Model',
	fields:[
		{name:'id',type:'int',sortable:true},
		{name:'readerNo',type:'string',sortable:true},
		{name:'readerName',type:'string',sortable:true},
		{name:'readerType',type:'string',sortable:true},
		{name:'phoneNumber',type:'string'},
		{name:'regDate',type:'string',sortable:true},
		{name:'remark',type:'string'}
	]
	
})