package com.lygeport.action;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.lygeport.domain.Menu;
import com.lygeport.service.MenuService;

public class MenuAction {

	private MenuService menuService;
	private Menu menu;

	public MenuService getMenuService() {
		return menuService;
	}

	public void setMenuService(MenuService menuService) {
		this.menuService = menuService;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public void getMenuJson() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/json; charset=utf-8");
		response.getWriter().write("[{id:'01',text:'01',children:[{id:'01-01',text:'01-01',leaf:true},{id:'01-02',text:'01-02',children:[{id:'01-02-01',text:'01-02-01',leaf:true},{id:'01-02-02',text:'01-02-02',leaf:true}]},{id:'01-03',text:'01-03',leaf:true}]},{id:'02',text:'02',leaf:true}]");
		List list = menuService.getMenuList();
	}
}
