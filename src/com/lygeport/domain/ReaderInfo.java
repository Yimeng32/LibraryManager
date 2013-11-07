package com.lygeport.domain;

import java.io.Serializable;
import java.util.Date;

public class ReaderInfo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4930430262104967857L;

	private Integer id;
	private String readerNo;
	private String readerName;
	private String readerType;
	private String phoneNumber;
	private Date regDate;
	private String remark;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getReaderNo() {
		return readerNo;
	}

	public void setReaderNo(String readerNo) {
		this.readerNo = readerNo;
	}

	public String getReaderName() {
		return readerName;
	}

	public void setReaderName(String readerName) {
		this.readerName = readerName;
	}

	public String getReaderType() {
		return readerType;
	}

	public void setReaderType(String readerType) {
		this.readerType = readerType;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Date getRegDate() {
		return regDate;
	}

	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

}
