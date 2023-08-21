package com.bezkoder.springjwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Suscripcion;
import com.bezkoder.springjwt.repository.SuscripcionRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class SuscripcionController {

	@Autowired
	SuscripcionRepository suscripcionRepository;
	
	@GetMapping("/suscripciones")
	public ResponseEntity<List<Suscripcion>> getAllreclamos(@RequestParam(required = false) String plan) {
		try {
			List<Suscripcion> reclamos = new ArrayList<Suscripcion>();

			if (plan == null)
				suscripcionRepository.findAll().forEach(reclamos::add);
			else
				suscripcionRepository.findByPlanContaining(plan).forEach(reclamos::add);

			if (reclamos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(reclamos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("/suscripciones/{id}")
	public ResponseEntity<Suscripcion> getReclamoById(@PathVariable("id") long id) {
		Optional<Suscripcion> ReclamoData = suscripcionRepository.findById(id);

		if (ReclamoData.isPresent()) {
			return new ResponseEntity<>(ReclamoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
