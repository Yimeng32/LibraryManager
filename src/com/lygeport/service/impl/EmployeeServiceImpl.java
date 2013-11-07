package com.lygeport.service.impl;

import java.util.List;

import com.lygeport.dao.EmployeeDao;
import com.lygeport.domain.Employee;
import com.lygeport.service.EmployeeService;

public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeDao employeeDao;

	public EmployeeDao getEmployeeDao() {
		return employeeDao;
	}

	public void setEmployeeDao(EmployeeDao employeeDao) {
		this.employeeDao = employeeDao;
	}

	@Override
	public void addEmployee(Employee e) {
		// TODO Auto-generated method stub
		employeeDao.addEmployee(e);
	}

	@Override
	public List<Employee> getEmployeeList() {
		// TODO Auto-generated method stub
		return employeeDao.showEmployee();
	}

}
