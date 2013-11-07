package com.lygeport.service.impl;

import java.util.List;

import com.lygeport.dao.MenuDao;
import com.lygeport.service.MenuService;

public class MenuServiceImpl implements MenuService {

	private MenuDao menuDao;

	public MenuDao getMenuDao() {
		return menuDao;
	}

	public void setMenuDao(MenuDao menuDao) {
		this.menuDao = menuDao;
	}

	@Override
	public List getMenuList() {
		return menuDao.getMenuList();
	}

}
