package com.form.controllers;

import java.util.List;

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

import com.form.dtos.Response;
import com.form.dtos.UserDTO;
import com.form.entities.City;
import com.form.entities.Country;
import com.form.entities.State;
import com.form.entities.User;
import com.form.services.CSCServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class CSCController {
	@Autowired
	private CSCServiceImpl cscService;

	@GetMapping("/countries")
	public ResponseEntity<?> Countries(){
		List<Country> countries = cscService.findAllCountries();
		if(countries==null)
			return Response.error("Countries Not Found");
		System.out.println(countries);
		Country[] arr = countries.toArray(new Country[0]);
		return Response.success(arr);
	}
	@GetMapping("/states/{cId}")
	public ResponseEntity<?> States(@PathVariable("cId") int cId){
		List<State> states= cscService.findStates(cId);
		if(states.isEmpty())
			return Response.error("States Not Found");
		System.out.println(states);
		return Response.success(states);
	}
	@GetMapping("/cities/{sId}")
	public ResponseEntity<?> Cities(@PathVariable("sId") int sId){
		List<City> cities= cscService.findCities(sId);
		if(cities.isEmpty())
			return Response.error("Cities Not Found");
		System.out.println(cities);
		return Response.success(cities);
	}
	
}
