package com.form.dtos;

public class Credentials {
	private String email;
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "CredentialsDTO [email=" + email + ", password=" + password + "]";
	}
	public Credentials(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public Credentials() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
