// User数据集合类
Ext.define("MyDesktop.modules.store.EmployeeStore", {
	extend : 'Ext.data.Store',
	requires: [
        'MyDesktop.modules.model.Employee'
    ],
	model:'MyDesktop.modules.model.Employee',			
	proxy : {
//		type : 'ajax',
//		url: 'data/employee.json',
		type : 'ajax',
		url: 'employee',
		reader : {
			type : 'json'/*,
			root : 'Employees',
			successProperty: 'success'*/
		},
		writer : {
			type : 'json'
		}
	},
//	groupField: 'sex',
	autoLoad : true
})