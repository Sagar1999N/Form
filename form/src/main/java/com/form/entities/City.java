package com.form.entities;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cities")
public class City {
	private String ctName;
	@Id
	private int ctId;
	
	private int sId;
	
	public City() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getCtName() {
		return ctName;
	}
	public void setCtName(String ctName) {
		this.ctName = ctName;
	}
	public int getCtId() {
		return ctId;
	}
	public void setCtId(int ctId) {
		this.ctId = ctId;
	}
	public int getsId() {
		return sId;
	}
	public void setsId(int sId) {
		this.sId = sId;
	}
	@Override
	public String toString() {
		return "City [ctName=" + ctName + ", ctId=" + ctId + ", sId=" + sId + "]";
	}
	public City(String ctName, int ctId, int sId) {
		super();
		this.ctName = ctName;
		this.ctId = ctId;
		this.sId = sId;
	}
	
	
}

