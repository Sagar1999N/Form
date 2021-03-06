package com.form.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.form.daos.UserDao;
import com.form.dtos.Credentials;
import com.form.dtos.DTOEntityConverter;
import com.form.dtos.UserDTO;
import com.form.entities.User;

@Transactional
@Service
public class UserServiceImpl {
	@Autowired
	private UserDao userDao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private DTOEntityConverter converter;

	public UserDTO findUserById(int userId) {
		User user = userDao.findById(userId);
		return converter.toUserDTO(user);
	}
	public UserDTO findUserByEmail(String email) {
		User user = userDao.findByEmail(email);
		if(user==null)
			return null;
		return converter.toUserDTO(user);
	}
	public UserDTO findUserByEmailAndPassword(Credentials cred) {
		User dbUser = userDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser!=null && passwordEncoder.matches(rawPassword,dbUser.getPassword())) {
			UserDTO result = converter.toUserDTO(dbUser);
			result.setPassword("********");
			return result;
		}
		return null;
	}
	public UserDTO saveUser(UserDTO userDto) {
		UserDTO dbUser = findUserByEmail(userDto.getEmail());
		if(dbUser==null) {
		String rawPassword = userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user1 = converter.toUserEntity(userDto);
		user1 = userDao.save(user1);
		userDto = converter.toUserDTO(user1);
		userDto.setPassword("********");
		return userDto;
		}
		return null;
	}
	public UserDTO fillForm(int id,User user) {
		User dbUser = userDao.findById(id);
		if(dbUser!=null) {
		user.setId(dbUser.getId());
		user.setPassword(dbUser.getPassword());
		user.setFf(true);
		user.setCreatedTimestamp(dbUser.getCreatedTimestamp());
		user = userDao.save(user);
		UserDTO userDto = converter.toUserDTO(user);
		return userDto;
		}
		return null;
	}
}
