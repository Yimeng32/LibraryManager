Ext.define("MyDesktop.modules.pages.ReaderInfoGrid1",{

	extend:'Ext.grid.Panel',
	alias:'widget.employeelist',
	bodyPadding:0,
	shadow:true,
	bodyStyle: 'background:#ffc;',
	border: true,
//	width:800,
//	height:400,
	columns:[{
    	text:'Index',
    	dataIndex:'id',
    	align:'center'
    },{
    	text:'Name',
    	dataIndex:'name',
    	align:'center',
		editor:{
			xtype:'textfield',
			allowBlank:false
		}
	},{
		text:'Age',
		dataIndex:'age',
		align:'center',
		editor:{
			xtype:'textfield',
			allowBlank:false
		},
		summaryType: 'average',
        summaryRenderer: function(value, summaryData, dataIndex) {
//					            return Ext.util.Format.number(value,'00.0'); 
            return Ext.String.format('平均年龄 {0}', Ext.util.Format.number(value,'00.0'));
        },
        filterable: true,//字段过滤
        filter:{
        	type: 'numeric'
        }
//							locked:true//列锁定
	},{
		text:'Sex',
		dataIndex:'sex',
		align:'center',
		editor:{
			xtype:'textfield',
			allowBlank:false
		},
		renderer:function(value){
			return (value=="男")?"<span style='color:red;font-weight:bold;'>男</span>":"<span style='color:green;font-weight:bold;'>女</span>";
		}
	},{
		text:'Birthday',
		dataIndex:'birthday',
		align:'center',
		xtype:'datecolumn',
		format:'Y年m月d日',
		width:150,
		editor:{
			xtype:'textfield',
			allowBlank:false
		}
	},{
		text:'Email',
		dataIndex:'email',
		align:'center',
		width:150,
		editor:{
			xtype:'textfield',
			allowBlank:false
		}
	},{
		text:'HireDate',
		dataIndex:'hiredate',
		align:'center',
		xtype:'datecolumn',
		format:'Y年m月d日',
		width:150,
		editor:{
			xtype:'textfield',
			allowBlank:false
		}
	},{
		text:'Salary',
		dataIndex:'salary',
		align:'center',
		editor:{
			xtype:'textfield',
			allowBlank:false
		}
	},{
		text:'Action',
		header:'操作',
		xtype:'actioncolumn',
		tooltip: 'Delete',
		icon:'images/delete.gif',
		align:'center',
		id:'delete1'
//							handler: function(grid, rowIndex, colIndex) {
//				                    var rec = grid.getStore().getAt(rowIndex);
//				                    alert("Terminate " + rec.get('name'));
//				                }
	}],
	tbar:[
		{
	        xtype: 'datefield',
	        fieldLabel: 'Start date',
	        labelWidth:80,
	        labelAlign:'right'
	    }, {
	        xtype: 'datefield',
	        fieldLabel: 'End date',
	        labelWidth:80,
	        labelAlign:'right'
	    },
	    "->",
		{xtype:'button',id:'add',text:'添加',iconCls:'add',defaultAlign:'tr-bl'},
    	{xtype:'button',text:'修改',iconCls:'edit'},
    	{xtype:'button',text:'删除', id:'delete',iconCls:'remove'},
    	{xtype:'button',id:'save',text:'保存',iconCls:'save'}
	],
	dockedItems:[{
    	xtype:'pagingtoolbar',
    	store:new MyDesktop.modules.store.EmployeeStore(),
    	dock:'bottom',
    	displayMsg:'显示{0}-{1}条记录，共{2}条',
    	displayInfo: true
//    	plugins:Ext.create('Ext.ux.SlidingPager',{})//第二种分页
	}],

//	selType:'checkboxmodel',//多选框
//	selType:'rowmodel',//行选择
//	selType:'cellmodel',//单元格选择模式
	multiSelect:true,//全选
	forceFit:true, //自动填充
//	simpleSelect:true,
	enableKeyNav:true,//可以通过键盘上下键选择数据
	columnLines:true,
	stripeRows:true,
	store:new MyDesktop.modules.store.EmployeeStore(),
	plugins: [
//		Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 2})
		Ext.create('Ext.grid.plugin.RowEditing', {clicksToEdit: 2})
	],
//  拖拽
	viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorganize',
            ddGroup:'ddTree',//拖放组名称
            dragGroup:'userlist',//拖拽组名称
            dropGroup:'userlist',//释放组名称
            enableDrag:true,
            enableDrop:true
        },
        listeners:{
        	drop:function(node, data, overModel, dropPosition, eOpts){
        		var st = this.getStore();
        		for(i=0;i<st.getCount();i++){
        			st.getAt(i).set('index',i+1);
        		}
        	}
        }
    },
	init:function(){
		this.getStore().load();
	}
})