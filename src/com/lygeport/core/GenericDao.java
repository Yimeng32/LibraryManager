package com.lygeport.core;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

public class GenericDao<T> extends HibernateDaoSupport {
	public void save(T t) {
		getHibernateTemplate().persist(t);
	}
}
