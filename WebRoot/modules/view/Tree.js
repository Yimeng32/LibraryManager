Ext.define('MyDesktop.modules.Tree', {
			extend : 'Ext.tree.Panel',
			// xtype:'leftTreePanel',
			alias : 'widget.leftTreePanel',
			id : 'menu-panel',
			title : '基础信息',
			frame : true,
			titleCollapse : true,
			useArrows : true,
			iconCls : 'icon-menu',
			width : 180,
			minWidth : 180,
			maxWidth : 200,
			split : true,
			rootVisible : false,
			collapsible : true,
			listeners : {
				itemclick : {
					fn : function(me, record, item, index, e, eOpts) {
						var pagesPanel = Ext.getCmp("pagesPanel"),
				    	    parentNode = record.parentNode,
				    		path = record.get('name'),
				    		text = record.get('text'),
				    		page;
				
				    	//如果点击的节点为非叶子节点，则不作任何操作
				    	if(!record.isLeaf()){
				    		return;
				    	}
				
				
				    	/*//根据节点的name属性，获取所要显示页面的路径
				    	while (parentNode && parentNode.get('name') != "root") {
				            path = parentNode.get('name') + '.' + Ext.String.capitalize(path);
				            text = parentNode.get('text')+'>>'+ text;
				            parentNode = parentNode.parentNode;
				        }*/
				        
				        //设置pagesPanel的title为所点击节点的text值
				    	pagesPanel.setTitle(text);
//				        pagesPanel.setIconCls('icon-location');
				        path = 'MyDesktop.modules.pages.'+path;
				        pagesPanel.removeAll();
				    	page = Ext.create(path);
				    	page.init();
				    	pagesPanel.add(page);
					}
				}
			}
		});