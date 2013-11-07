package com.lygeport.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import com.lygeport.domain.ReaderInfo;
import com.lygeport.service.ReaderInfoService;

public class ReaderInfoAction {

	private ReaderInfoService readerInfoService;
	private ReaderInfo readerInfo;

	private String delData;
	
	public ReaderInfoService getReaderInfoService() {
		return readerInfoService;
	}

	public void setReaderInfoService(ReaderInfoService readerInfoService) {
		this.readerInfoService = readerInfoService;
	}

	public ReaderInfo getReaderInfo() {
		return readerInfo;
	}

	public void setReaderInfo(ReaderInfo readerInfo) {
		this.readerInfo = readerInfo;
	}
	
	
	public String getDelData() {
		return delData;
	}

	public void setDelData(String delData) {
		this.delData = delData;
	}

	public void getReaderInfoJson() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		HttpServletRequest request = ServletActionContext.getRequest();
		response.setContentType("text/json; charset=utf-8");
		
		int start = Integer.parseInt(request.getParameter("start"));
		int limit = Integer.parseInt(request.getParameter("limit"));
		
		List<ReaderInfo> list = new ArrayList<ReaderInfo>();
		Gson gson = new Gson();
		if (this.getDelData()!=null && !"".equals(this.getDelData())) {
			String[] readerNos = this.getDelData().trim().split(",");
			for (int i = 0; i < readerNos.length; i++) {
				readerInfoService.deleteReaderInfo(readerNos[i]);
			}
		}
		list = readerInfoService.getReaderInfoList(start,limit);
		JsonElement element = gson.toJsonTree(list);
		String json = gson.toJson(element);
		String str = gson.toJson(list);
		int totalProperty = readerInfoService.getTotalProperty();
		str = "{totalProperty:"+totalProperty+",root:"+str+"}";
//		List<ReaderInfo> list1 = gson.fromJson(str, new TypeToken<List<ReaderInfo>>(){}.getType());
		response.getWriter().write(str);
	}

	public void readerInfoAdd() throws Exception {
		readerInfoService.addReaderInfo(readerInfo);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/json; charset=utf-8");
		response.getWriter().write("{success:true}");
	}
}
