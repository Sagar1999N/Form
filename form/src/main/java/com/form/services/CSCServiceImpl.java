package com.form.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.form.daos.CityDao;
import com.form.daos.CountryDao;
import com.form.daos.StateDao;
import com.form.dtos.DTOEntityConverter;
import com.form.entities.City;
import com.form.entities.Country;
import com.form.entities.State;

@Transactional
@Service
public class CSCServiceImpl {
	@Autowired
	private CountryDao countryDao;
	@Autowired
	private StateDao stateDao;
	@Autowired
	private CityDao cityDao;


	public List<Country> findAllCountries() {
		List<Country> countries = countryDao.findAll();
		return countries;
	}


	public List<State> findStates(int cId) {
		List<State> states = stateDao.findBycId(cId);
		return states;
	}

	public List<City> findCities(int sId) {
		List<City> cities = cityDao.findCityBysId(sId);
		return cities;
	}

}
