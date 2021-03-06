package com.form.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.form.daos.UserDao;
import com.form.dtos.Credentials;
import com.form.dtos.Response;
import com.form.dtos.UserDTO;
import com.form.entities.User;
import com.form.services.ExcelServiceImpl;
import com.form.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class UserController {
	@Autowired
	private UserDao userDao;
	@Autowired
	private UserServiceImpl userService;
	@Autowired 
	private ExcelServiceImpl excelService;
	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@Valid @RequestBody Credentials cred){
		UserDTO userDto = userService.findUserByEmailAndPassword(cred);
		if(userDto==null)
			return Response.error("User Not Found");
		return Response.success(userDto);
	}
	@PostMapping("/user/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto){
		UserDTO result = userService.saveUser(userDto);
		if(result!=null)
			return Response.success(result);
		return Response.error("Email already in use!");
	}
	@PostMapping("/user/form/{id}")
	public ResponseEntity<?> fForm(@PathVariable("id") int id, @RequestBody User user){
		UserDTO result = userService.fillForm(id, user);
		if(result!=null)
			return Response.success(result);
		return Response.error("Errorr");
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<?> info(@PathVariable("id") int id){
		User result = userDao.findById(id);
		if(result!=null)
			return Response.success(result);
		return Response.error("User Not Found");
	}
	@PostMapping("/user/download")
	public ResponseEntity<?> getFile(@RequestBody User user){
		User dbUser = userDao.findById(user.getId());
		System.out.println(dbUser);
		if(dbUser.getRole().equals("admin")) {
			String filename = "Users.xlsx";
			InputStreamResource file = new InputStreamResource(excelService.load());
			return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename="+filename)
		        .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
		        .body(file);
		}
		return Response.error("You don't have access to data");
	}
}
