package com.lygeport.action;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.lygeport.domain.Employee;
import com.lygeport.domain.User;
import com.lygeport.service.EmployeeService;
import com.lygeport.service.LoginService;

public class LoginAction {

	private EmployeeService employeeService;
	private LoginService loginService;
	private User user;
	private String valCode;

	public EmployeeService getEmployeeService() {
		return employeeService;
	}

	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	public LoginService getLoginService() {
		return loginService;
	}

	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getValCode() {
		return valCode;
	}

	public void setValCode(String valCode) {
		this.valCode = valCode;
	}

	public String execute() throws Exception {
		// 通过下面语句可以直接获取到spring容器
		/*
		 * ServletContext application =
		 * ServletActionContext.getServletContext(); WebApplicationContext ctx =
		 * WebApplicationContextUtils.getWebApplicationContext(application);
		 * IEmployeeService employeeService = (IEmployeeService)
		 * ctx.getBean("EmployeeServiceImpl")
		 */;
		HttpSession session = ServletActionContext.getRequest().getSession();
//		或者 Map session1 =  ServletActionContext.getContext().getSession();
		
		String validate = session.getAttribute("RANDOMVALIDATECODEKEY").toString();
		String valStr = getValCode().toUpperCase();
		if(valStr==validate||valStr.equals(validate)){
			if (loginService.login(user)) {
				return "success";
			} else {
				return "fail";
			}
		}else{
			return "fail";
		}
	}
}
