package com.form.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "countries")
public class Country {
	private String cName;
	@Id
	private int cId;
	
	public Country() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	@Override
	public String toString() {
		return "Country [cName=" + cName + ", cId=" + cId + "]";
	}
	public Country(String cName, int cId) {
		super();
		this.cName = cName;
		this.cId = cId;
	}

	
}

