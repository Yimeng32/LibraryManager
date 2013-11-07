package com.lygeport.dao.impl;

import java.util.List;

import org.hibernate.criterion.Restrictions;

import com.lygeport.core.GenericDao;
import com.lygeport.dao.MenuDao;
import com.lygeport.domain.Menu;

public class MenuDaoImpl extends GenericDao<Menu> implements MenuDao {

	@Override
	public List<Menu> getMenuList() {
		List list = getSession().createCriteria(Menu.class)
				.add(Restrictions.eq("parentID", new Integer(0))).list();
		return list;

	}
}
