package com.form.dtos;

import org.springframework.stereotype.Component;

import com.form.entities.User;

@Component
public class DTOEntityConverter {
	public UserDTO toUserDTO(User entity) {
		UserDTO dto = new UserDTO();
		dto.setId(entity.getId());
		dto.setFirstName(entity.getFirstName());
		dto.setLastName(entity.getLastName());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		dto.setRole(entity.getRole());
		return dto;
	}
	public User toUserEntity(UserDTO dto) {
		User entity = new User();
		entity.setId(dto.getId());
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setRole(dto.getRole());
		return entity;
	}
}
