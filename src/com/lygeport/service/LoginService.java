package com.lygeport.service;

import com.lygeport.domain.User;


public interface LoginService {

	void reg(User user);

	boolean login(User user);
}
