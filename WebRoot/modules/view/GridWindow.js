/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.modules.GridWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'MyDesktop.modules.store.EmployeeStore'
    ],

    id:'grid-win',

    init : function(){
        this.launcher = {
            text: 'Grid Window',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
//        var gridstore = Ext.create('MyDesktop.modules.store.EmployeeStore',{});
        var win = desktop.getWindow('grid-win');
        if(!win){
            win = desktop.createWindow({
                id: 'grid-win',
                title:'员工管理',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [{
                        border: false,
                        xtype: 'grid',
                        store:  new MyDesktop.modules.store.EmployeeStore(),
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
						}]
                    }
                ],
                tbar:[{
                    text:'Add Something',
                    tooltip:'Add a new row',
                    iconCls:'add'
                }, '-', {
                    text:'Options',
                    tooltip:'Modify options',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
            });
        }
//        gridstore.load();
        return win;
    }
});

