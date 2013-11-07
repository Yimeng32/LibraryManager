package com.lygeport.service.impl;

import com.lygeport.dao.UserDao;
import com.lygeport.domain.User;
import com.lygeport.service.LoginService;

public class LoginServiceImpl implements LoginService {

	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public void reg(User user) {
		userDao.save(user);
	}

	@Override
	public boolean login(User user) {
		return userDao.find(user) != null;
	}

}
