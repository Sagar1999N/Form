package com.form.dtos;

public class UserDTO {
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String role;
	private boolean ff;
	public UserDTO(int id, String firstName, String lastName, String email, String password, String role) {
		super();
		
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		System.out.println("yes role");
	}
	
	public boolean isFf() {
		return ff;
	}

	public void setFf(boolean ff) {
		this.ff = ff;
	}

	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		if(role != null) {
		this.role = role;}
		else {this.role="user";
			}
		}
	public UserDTO(int id, String firstName, String lastName, String email, String password) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		System.out.println("no role");
	}
	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
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
		return "UserDTO [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", role=" + role + ", ff=" + ff + "]";
	}
	
}
