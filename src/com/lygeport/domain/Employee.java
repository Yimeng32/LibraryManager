package com.lygeport.domain;

import java.util.Date;

public class Employee {
	private Integer id;
	private String name;
	private Integer age;
	private String sex;
	private Date birthday;
	private String email;
	private Date hiredate;
	private Float salary;

	public Employee() {

	}

	public Employee(String name, String email, Date hiredate, Float salary) {
		this.name = name;
		this.email = email;
		this.hiredate = hiredate;
		this.salary = salary;
	}

	public Employee(String name, Integer age, String sex, Date birthday,
			String email, Date hiredate, Float salary) {
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.birthday = birthday;
		this.email = email;
		this.hiredate = hiredate;
		this.salary = salary;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getHiredate() {
		return hiredate;
	}

	public void setHiredate(Date hiredate) {
		this.hiredate = hiredate;
	}

	public Float getSalary() {
		return salary;
	}

	public void setSalary(Float salary) {
		this.salary = salary;
	}

}
