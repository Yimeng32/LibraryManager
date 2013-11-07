package com.lygeport.dao;

import java.util.List;

import com.lygeport.domain.Employee;

public interface EmployeeDao {
	//声明一些方法
		public void addEmployee(Employee e);
		public List<Employee> showEmployee();
		public void updateEmployee(Employee e);		
		//根据id删除雇员
		public void deleteEmployee(java.io.Serializable id);
}
