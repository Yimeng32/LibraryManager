package com.lygeport.dao;

import com.lygeport.domain.User;

public interface UserDao {
	void save(User user);

	User find(User user);
}
