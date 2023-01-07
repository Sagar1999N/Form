package com.form.entities;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "states")
public class State {
	private String sName;
	
	private int cId;
	@Id
	private int sId;
	
		public State() {
		super();
		// TODO Auto-generated constructor stub
	}
		public String getsName() {
		return sName;
	}
	public void setsName(String sName) {
		this.sName = sName;
	}
	public int getsId() {
		return sId;
	}
	public void setsId(int sId) {
		this.sId = sId;
	}
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	@Override
	public String toString() {
		return "State [sName=" + sName + ", cId=" + cId + ", sId=" + sId + "]";
	}
	public State(String sName, int cId, int sId) {
		super();
		this.sName = sName;
		this.cId = cId;
		this.sId = sId;
	}

	
}

