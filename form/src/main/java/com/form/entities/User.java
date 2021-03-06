package com.form.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "user")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	@NotEmpty
	private String firstName;
	@NotEmpty
	private String lastName;
	@NotEmpty
	@Size(min = 4)
	private String password;
	@NotEmpty
	@Email
	private String email;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date birthDate;
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String state;
	private String country;
	private String postalCode;
	@Pattern(regexp = "^[0-9]{10}$")
	private String phone;
	private String gender;
	private String profileImage;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(insertable = false)
	private Date createdTimestamp;
	public User(@NotEmpty String firstName, @NotEmpty String lastName,
			@NotEmpty @Size(min = 4, max = 10) String password, @NotEmpty @Email String email) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.email = email;
	}
	private String role = "user";
	private boolean ff = false;
	public User(int id, @NotEmpty String firstName, @NotEmpty String lastName,
			@NotEmpty @Size(min = 4, max = 10) String password, @NotEmpty @Email String email, @NotNull Date birthDate,
			@NotEmpty String addressLine1, @NotEmpty String addressLine2, @NotEmpty String city, @NotEmpty String state,
			@NotEmpty String country, @NotEmpty String postalCode,
			@NotEmpty @Pattern(regexp = "^[0-9]{10}$") String phone, @NotEmpty String gender, String profileImage,
			@NotEmpty Date createdTimestamp, String role, boolean ff) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.email = email;
		this.birthDate = birthDate;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postalCode = postalCode;
		this.phone = phone;
		this.gender = gender;
		this.profileImage = profileImage;
		this.createdTimestamp = createdTimestamp;
		this.role = role;
		this.ff = ff;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public boolean isFf() {
		return ff;
	}
	public void setFf(boolean ff) {
		this.ff = ff;
	}
	public User(int id, @NotEmpty String firstName, @NotEmpty String lastName,
			@NotEmpty @Size(min = 4, max = 10) String password, @NotEmpty @Email String email, @NotNull Date birthDate,
			@NotEmpty String addressLine1, @NotEmpty String addressLine2, @NotEmpty String city, @NotEmpty String state,
			@NotEmpty String country, @NotEmpty String postalCode,
			@NotEmpty @Pattern(regexp = "^[0-9]{10}$") String phone, @NotEmpty String gender, String profileImage,
			@NotEmpty Date createdTimestamp) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.email = email;
		this.birthDate = birthDate;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postalCode = postalCode;
		this.phone = phone;
		this.gender = gender;
		this.profileImage = profileImage;
		this.createdTimestamp = createdTimestamp;
	}
	public User() {
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	public String getAddressLine2() {
		return addressLine2;
	}
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getProfileImage() {
		return profileImage;
	}
	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}
	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}
	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", password=" + password
				+ ", email=" + email + ", birthDate=" + birthDate + ", addressLine1=" + addressLine1 + ", addressLine2="
				+ addressLine2 + ", city=" + city + ", state=" + state + ", country=" + country + ", postalCode="
				+ postalCode + ", phone=" + phone + ", gender=" + gender + ", profileImage=" + profileImage
				+ ", createdTimestamp=" + createdTimestamp + ", role=" + role + ", ff=" + ff + "]";
	}
	public User (int id) {
		this.id=id;
	}
	
}
