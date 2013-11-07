package com.lygeport.service;

import java.util.List;

import com.lygeport.domain.ReaderInfo;

public interface ReaderInfoService {

	//声明一些方法
	public void addReaderInfo(ReaderInfo e);
	
	public List<ReaderInfo> getReaderInfoList(int start, int limit);
	
	public void deleteReaderInfo(String readerNo);
	
	public int getTotalProperty();
	
}
