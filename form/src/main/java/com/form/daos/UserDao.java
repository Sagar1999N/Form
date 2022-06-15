package com.form.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.form.entities.User;

public interface UserDao extends JpaRepository<User,Integer>{
	User findById(int id);
	User findByEmail(String email);
	@Modifying
	@Query("UPDATE User u SET u.ff = ?2 WHERE u.id=?1")
	int updateFF(int id, boolean ff);
}
