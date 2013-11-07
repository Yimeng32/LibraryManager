package com.lygeport.service.impl;

import java.util.List;

import com.lygeport.dao.ReaderInfoDao;
import com.lygeport.domain.ReaderInfo;
import com.lygeport.service.ReaderInfoService;

public class ReaderInfoServiceImpl implements ReaderInfoService {

	private ReaderInfoDao readerInfoDao;

	

	public ReaderInfoDao getReaderInfoDao() {
		return readerInfoDao;
	}

	public void setReaderInfoDao(ReaderInfoDao readerInfoDao) {
		this.readerInfoDao = readerInfoDao;
	}

	@Override
	public void addReaderInfo(ReaderInfo e) {
		// TODO Auto-generated method stub
		readerInfoDao.addReaderInfo(e);
	}

	@Override
	public List<ReaderInfo> getReaderInfoList(int start, int limit) {
		// TODO Auto-generated method stub
		return readerInfoDao.showReaderInfo(start,limit);
	}

	@Override
	public void deleteReaderInfo(String readerNo) {
		readerInfoDao.deleteReaderInfo(readerNo);
		
	}

	@Override
	public int getTotalProperty() {
		// TODO Auto-generated method stub
		return readerInfoDao.getTotalProperty();
	}

}
