package com.lygeport.dao.impl;

import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.lygeport.core.GenericDao;
import com.lygeport.dao.UserDao;
import com.lygeport.domain.Menu;
import com.lygeport.domain.User;

//这里配置@Transactional用处是让spring的事务管理器接管该service的事务
@Transactional

public class UserDaoImpl extends GenericDao<User> implements UserDao{

	@Override
	public User find(User user) {
		List list = getSession().createCriteria(User.class)
		.add(Restrictions.eq("username", user.getUsername()))
		.add(Restrictions.eq("password", user.getPassword())).list();
		if(list!=null&&list.size()>0) {
			return (User)list.get(0);
		}
		return null;
	}
	
}
