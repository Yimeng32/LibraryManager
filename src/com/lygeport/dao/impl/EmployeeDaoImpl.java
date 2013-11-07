package com.lygeport.dao.impl;


import java.io.Serializable;
import java.util.List;

import com.lygeport.core.GenericDao;
import com.lygeport.dao.EmployeeDao;
import com.lygeport.domain.Employee;


public class EmployeeDaoImpl extends GenericDao<Employee> implements EmployeeDao{

	@Override
	public void addEmployee(Employee e) {
		getHibernateTemplate().persist(e);
	}

	@Override
	public List<Employee> showEmployee() {
		List<Employee> list = getSession().createCriteria(Employee.class).list();
		return list;
	}

	@Override
	public void updateEmployee(Employee e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteEmployee(Serializable id) {
		// TODO Auto-generated method stub
		
	}

}
