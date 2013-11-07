
var ReaderInfoStore = Ext.create("MyDesktop.modules.store.ReaderInfoStore",{});

Ext.define("MyDesktop.modules.pages.ReaderInfoGrid", {
	extend : 'Ext.grid.Panel',
	alias : 'widget.readerInfolist',
	id:'readerInfolist',
	bodyPadding : 0,
	shadow : true,
	bodyStyle : 'background:#ffc;',
	border : true,
	columns : [{
				text : 'ID',
				dataIndex : 'id',
				align : 'center',
				width:40
			}, {
				text : '读者编号',
				dataIndex : 'readerNo',
				align : 'center',
				width:80
			}, {
				text : '读者姓名',
				dataIndex : 'readerName',
				align : 'center',
				width:80
			}, {
				text : '读者类型',
				dataIndex : 'readerType',
				align : 'center',
				width:80
			}, {
				text : '联系电话',
				dataIndex : 'phoneNumber',
				align : 'center',
				width:100
			}, {
				text : '登记日期',
				dataIndex : 'regDate',
				align : 'center',
				xtype : 'datecolumn',
				format : 'Y年m月d日',
				width:100
			}, {
				text : '备注',
				dataIndex : 'remark',
				align : 'center',
				width:200
		}],
	tbar : [{
				xtype : 'button',
				id : 'add',
				text : '添加',
				tooltip:'添加读者信息',
				iconCls : 'add',
				handler:function(){
					Ext.create('Ext.window.Window', {
					    title: '新增读者',
					    titleAlign:'center',
					    id:'readerInfoForm',
					    modal:true,
					    layout: 'fit',
					    maximizable:true,
					    items:[{
					        xtype: 'form',
					        bodyPadding: 13,
					        autoScroll:true,
					        fieldDefaults: {
					            labelAlign: 'right',
					            labelWidth: 80,
					            msgTarget: 'side'
					        },
					        items: [{
						            xtype: 'fieldset',
						            title: '基本信息',
						            defaultType: 'textfield',
						            defaults: {
						                width: 300
						            },
						            items: [{ 
						            	allowBlank:false, 
							            fieldLabel: '读者编号', 
							            name: 'readerInfo.readerNo', 
							            emptyText: '读者编号' 
							        },{ 
						            	allowBlank:false, 
							            fieldLabel: '读者姓名', 
							            name: 'readerInfo.readerName', 
							            emptyText: '读者姓名' 
							        },{
							        	allowBlank:false,
						                xtype: 'combobox',
						                fieldLabel: '类型',
						                store :[['教师','教师'],['学生','学生']],
						                name: 'readerInfo.readerType',
						                valueField: 'abbr',
						                displayField: '读者类型',
						                typeAhead: true,
						                queryMode: 'local',
						                emptyText: '读者类型'
						            },{ 
						            	allowBlank:false, 
						            	fieldLabel: '联系电话', 
						            	name: 'readerInfo.phoneNumber', 
						            	emptyText: '联系电话',
						            	xtype: 'textfield'
						            },{
						                xtype: 'datefield',
						                fieldLabel: '登记日期',
						                format: 'Y-m-d',
						                name: 'readerInfo.regDate',
						                allowBlank: false
					            	}]
							 },{
					            xtype: 'fieldset',
					            title: '详细信息',
					            defaultType: 'textfield',
					            defaults: {
						                width: 300
						        },
					            items: [
					            {
					                fieldLabel: '备注',
					                name: 'readerInfo.remark',
					                xtype:'textarea'
					            }]
					        }],
						        buttons: [
					                {
					                	text:'添加',
					                	handler:function(){
					                		var readerInfoForm = this.ownerCt.ownerCt;
					                		if(readerInfoForm.form.isValid()){
					                			readerInfoForm.form.submit({
													waitMsg:'正在添加，请稍后...',
													url:'readerInfoAdd.action',
													method:'POST',
													success:function(form,action){
														Ext.Msg.alert('提示','添加成功！',function(){
//															Ext.getCmp('readerInfoForm').destroy();
															var grid = Ext.getCmp('readerInfolist');
															grid.getStore().load();
														});
														
													},
													failure:function(form,action){
														Ext.Msg.alert('提示','添加失败！');
													}
					                			});
					                		}else{
					                			Ext.Msg.alert('提示','请填写完全再提交！');
					                		}
					                		
					                	}
					                },
					                {
					                	text:'取消',
					                	handler:function(){
					                		Ext.getCmp('readerInfoForm').destroy();
					                	}
					                }
					            ]
					    }]
					}).show();
				}
			}, 
			{
				xtype : 'button',
				text : '修改',
				tooltip:'修改读者信息',
				iconCls : 'edit',
				handler:function(){
					var grid = this.findParentByType('readerInfolist');
					var record = grid.getSelectionModel().getSelection();
					if(!record){  
			            Ext.Msg.alert('修改','请选择要修改的数据！');  
			            return;  
			        }else{
			        	if(record.length==1){
			        		Ext.create('Ext.window.Window', {
							    title: '修改读者',
							    titleAlign:'center',
							    id:'readerInfoForm',
							    modal:true,
							    layout: 'fit',
							    maximizable:true,
							    items:[{
							        xtype: 'form',
							        bodyPadding: 13,
							        autoScroll:true,
							        fieldDefaults: {
							            labelAlign: 'right',
							            labelWidth: 80,
							            msgTarget: 'side'
							        },
							        items: [{
								            xtype: 'fieldset',
								            title: '基本信息',
								            defaultType: 'textfield',
								            defaults: {
								                width: 300
								            },
								            items: [{ 
								            	allowBlank:false, 
									            fieldLabel: '读者编号', 
									            name: 'readerInfo.readerNo', 
									            emptyText: '读者编号' 
									        },{ 
								            	allowBlank:false, 
									            fieldLabel: '读者姓名', 
									            name: 'readerInfo.readerName', 
									            emptyText: '读者姓名' 
									        },{
									        	allowBlank:false,
								                xtype: 'combobox',
								                fieldLabel: '类型',
								                store :[['教师','教师'],['学生','学生']],
								                name: 'readerInfo.readerType',
								                valueField: 'abbr',
								                displayField: '读者类型',
								                typeAhead: true,
								                queryMode: 'local',
								                emptyText: '读者类型'
								            },{ 
								            	allowBlank:false, 
								            	fieldLabel: '联系电话', 
								            	name: 'readerInfo.phoneNumber', 
								            	emptyText: '联系电话',
								            	xtype: 'textfield'
								            },{
								                xtype: 'datefield',
								                fieldLabel: '登记日期',
								                format: 'Y-m-d',
								                name: 'readerInfo.regDate',
								                allowBlank: false
							            	}]
									 },{
							            xtype: 'fieldset',
							            title: '详细信息',
							            defaultType: 'textfield',
							            defaults: {
								                width: 300
								        },
							            items: [
							            {
							                fieldLabel: '备注',
							                name: 'readerInfo.remark',
							                xtype:'textarea'
							            }]
							        }],
								        buttons: [
							                {
							                	text:'添加',
							                	handler:function(){
							                		var readerInfoForm = this.ownerCt.ownerCt;
							                		if(readerInfoForm.form.isValid()){
							                			readerInfoForm.form.submit({
															waitMsg:'正在添加，请稍后...',
															url:'readerInfoAdd.action',
															method:'POST',
															success:function(form,action){
																Ext.Msg.alert('提示','添加成功！',function(){
		//															Ext.getCmp('readerInfoForm').destroy();
																	var grid = Ext.getCmp('readerInfolist');
																	grid.getStore().load();
																});
																
															},
															failure:function(form,action){
																Ext.Msg.alert('提示','添加失败！');
															}
							                			});
							                		}else{
							                			Ext.Msg.alert('提示','请填写完全再提交！');
							                		}
							                		
							                	}
							                },
							                {
							                	text:'取消',
							                	handler:function(){
							                		Ext.getCmp('readerInfoForm').destroy();
							                	}
							                }
							            ]
							    }]
							}).show();
			        	}else{
			        		Ext.Msg.alert('修改','请选择一条要修改的数据！');  
			            	return; 
			        	}
			        }

				}
			}, {
				xtype : 'button',
				text : '删除',
				tooltip:'删除读者信息',
				id : 'delete',
				iconCls : 'remove',
				handler:function(){
//					this.ownerCt.ownerCt
					var grid = this.findParentByType('readerInfolist');
					var records = grid.getSelectionModel().getSelection();
					var len = records.length;
					if(records.length == 0){
		    			Ext.MessageBox.alert('删除操作','请选择要删除的数据！');
		    		}else{
		    			Ext.MessageBox.confirm('确认删除','你确认要删除选中的数据吗？',function(btn){
		    			
		    				if(btn == "yes"){
		    					var jsonData = "";
		    					for(var i = 0;i<records.length;i++){
		    						var readerNo = records[i].get("readerNo");
		    						if(i == 0){
		    							jsonData = jsonData + readerNo;
		    						}else{
			    						jsonData = jsonData + "," + readerNo;
		    						}
		    						
		    					}
		    					if(len<grid.getStore().getCount()){
		    						grid.getStore().load({
			    						params:{
			    							delData:jsonData
			    						}
			    					});
								}else{
									grid.getStore().load({
			    						params:{
			    							start:(grid.getStore().currentPage-2)*20,
											limit:20,
			    							delData:jsonData
			    						}
			    					});
									Ext.getCmp("readerInfopagingtool").movePrevious();
								}
		    				}
		    			});
		    		}	  
				
				}
			},
			"->", 
			{
				xtype : 'textfield',
				fieldLabel : '读者编号',
				labelWidth : 60,
				labelAlign : 'right',
				width:200
			}, {
				xtype : 'textfield',
				fieldLabel : '读者姓名',
				labelWidth : 60,
				labelAlign : 'right',
				width:200
			}, {
				xtype : 'button',
				id : 'search',
				text : '查找',
				iconCls : 'search'

		}],
	dockedItems : [{
		xtype : 'pagingtoolbar',
		id:'readerInfopagingtool',
		store : ReaderInfoStore,
		dock : 'bottom',
		displayMsg : '显示{0}-{1}条记录，共{2}条',
		displayInfo : true
		}],

	selType:'checkboxmodel',//多选框
	multiSelect : true,// 全选
	forceFit : true, // 自动填充
	enableKeyNav : true,// 可以通过键盘上下键选择数据
	columnLines : true,
	stripeRows : true,
	store : ReaderInfoStore,
	init : function() {
		this.getStore().load({
			params:{
				start:0,
				limit:20
			}
		});
	}
})