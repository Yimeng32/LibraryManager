// ReaderInfo数据集合类
Ext.define("MyDesktop.modules.store.ReaderInfoStore", {
	extend : 'Ext.data.Store',
	requires: [
        'MyDesktop.modules.model.ReaderInfo'
    ],
	model:'MyDesktop.modules.model.ReaderInfo',	
	pageSize:20,
	proxy : {
//		type : 'ajax',
//		url: 'data/employee.json',
		type : 'ajax',
		url: 'getReaderInfo',
		reader : {
			type : 'json',
			totalProperty:'totalProperty',
			root : 'root'
		},
		writer : {
			type : 'json'
		}
	}
})