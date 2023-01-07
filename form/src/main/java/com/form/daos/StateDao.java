package com.form.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.form.entities.City;
import com.form.entities.Country;
import com.form.entities.State;
import com.form.entities.User;

public interface StateDao extends JpaRepository<State,Integer>{

		List<State> findBycId(int cId);
}
