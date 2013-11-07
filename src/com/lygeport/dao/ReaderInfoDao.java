package com.lygeport.dao;

import java.util.List;

import com.lygeport.domain.ReaderInfo;

public interface ReaderInfoDao {
	//声明一些方法
		public void addReaderInfo(ReaderInfo e);
		public List<ReaderInfo> showReaderInfo(int start, int limit);
		public void updateReaderInfo(ReaderInfo e);		
		//根据id删除雇员
		public void deleteReaderInfo(String readerNo);
		public int getTotalProperty();
}
