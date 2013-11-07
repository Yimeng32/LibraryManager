package com.lygeport.demo;

import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lygeport.domain.Employee;
import com.lygeport.service.EmployeeService;

public class Junit {
	
	public static void main(String[] args){
		ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
		JunitService test = (JunitService) app.getBean("JunitService");
		System.out.println(test.getName());
		
//		SessionFactory sf = (SessionFactory) app.getBean("sessionFactory");
//		Session s = sf.openSession();
//		Employee employee = new Employee("jmjiao", "374644943@qq.com", new Date(), 3400.00f);
//		Transaction trans = s.beginTransaction();
//		s.save(employee);
//		trans.commit();
		
		
		EmployeeService employeeService = (EmployeeService) app.getBean("EmployeeServiceImpl");
		Employee employee = new Employee("jmjiao", "374644943@qq.com", new Date(), 3400.00f);
		employeeService.addEmployee(employee);
		
		
	}

}
