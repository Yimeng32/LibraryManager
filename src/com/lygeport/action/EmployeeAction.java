package com.lygeport.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import com.lygeport.domain.Employee;
import com.lygeport.service.EmployeeService;

public class EmployeeAction {
	private EmployeeService employeeService;
	private Employee employee;

	public EmployeeService getEmployeeService() {
		return employeeService;
	}

	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public void getEmployeeJson() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/json; charset=utf-8");
		List<Employee> list = new ArrayList<Employee>();
		Gson gson = new Gson();
		list = employeeService.getEmployeeList();
		JsonElement element = gson.toJsonTree(list);
		String json = gson.toJson(element);
		String str = gson.toJson(list);
		List<Employee> list1 = gson.fromJson(str, new TypeToken<List<Employee>>(){}.getType());
		response.getWriter().write(str);
	}
	
	public void employeeAdd() throws Exception {
		employeeService.addEmployee(employee);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/json; charset=utf-8");
		response.getWriter().write("{success:true}");
	}

}
