package com.form.services;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.daos.UserDao;
import com.form.entities.User;

@Service
public class ExcelServiceImpl {
	@Autowired
	UserDao userDao;
	public ByteArrayInputStream load() {
		List<User> users = userDao.findAll();
		ByteArrayInputStream in = ExcelHelper.usersToExcel(users);
		return in;
	}
}
