package com.bezkoder.springjwt.controllers;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Reclamo;
import com.bezkoder.springjwt.repository.ReclamoRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class ReclamoController {
	
	@Autowired
	ReclamoRepository reclamoRepository;
	
	@GetMapping("/reclamos")
	public ResponseEntity<List<Reclamo>> getAllReclamos(@RequestParam(required = false) String defecto) {
		try {
			List<Reclamo> reclamos = new ArrayList<Reclamo>();

			if (defecto == null)
				reclamoRepository.findAll().forEach(reclamos::add);
			else
				reclamoRepository.findByDefectoContaining(defecto).forEach(reclamos::add);

			if (reclamos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(reclamos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("/reclamos/{id}")
	public ResponseEntity<Reclamo> getReclamoById(@PathVariable("id") long id) {
		Optional<Reclamo> ReclamoData = reclamoRepository.findById(id);

		if (ReclamoData.isPresent()) {
			return new ResponseEntity<>(ReclamoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	

}
