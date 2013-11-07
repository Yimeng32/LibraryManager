package com.lygeport.dao.impl;


import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;

import com.lygeport.core.GenericDao;
import com.lygeport.dao.ReaderInfoDao;
import com.lygeport.domain.ReaderInfo;


public class ReaderInfoDaoImpl extends GenericDao<ReaderInfo> implements ReaderInfoDao{

	@Override
	public void addReaderInfo(ReaderInfo e) {
		getHibernateTemplate().persist(e);
	}

	@Override
	public List<ReaderInfo> showReaderInfo(int start, int limit) {
		List<ReaderInfo> list = new ArrayList<ReaderInfo>();
		Query query = getSession().createQuery("from ReaderInfo");
		query.setFirstResult(start); //从第0条开始      
		query.setMaxResults(limit); //取出10条
		list = query.list();
		return list;
	}

	@Override
	public void updateReaderInfo(ReaderInfo e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteReaderInfo(String readerNo) {
		// TODO Auto-generated method stub
		Query query = getSession().createQuery("delete from ReaderInfo where readerno = :readerNo");
		query.setString("readerNo", readerNo);
		query.executeUpdate();
		
	}

	@Override
	public int getTotalProperty() {
		// TODO Auto-generated method stub
		int totalProperty = Integer.parseInt(getSession().createQuery("select COUNT(*) from ReaderInfo").uniqueResult().toString());
		return totalProperty;
	}

}
