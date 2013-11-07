package com.lygeport.service;

import java.util.List;

import com.lygeport.domain.Employee;

public interface EmployeeService {

	//声明一些方法
	public void addEmployee(Employee e);
	
	public List<Employee> getEmployeeList();
	
}
