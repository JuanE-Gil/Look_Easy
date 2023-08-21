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

import com.bezkoder.springjwt.models.Vista;
import com.bezkoder.springjwt.repository.VistaRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class VistaController {
	
	@Autowired
	VistaRepository vistaRepository;
	
	@GetMapping("/vistas")
	public ResponseEntity<List<Vista>> getAllVistas(@RequestParam(required = false) Long pelicula) {
		try {
			List<Vista> vistas = new ArrayList<Vista>();

			if (pelicula == null)
				vistaRepository.findAll().forEach(vistas::add);
			else
				vistaRepository.findByPeliculaContaining(pelicula).forEach(vistas::add);

			if (vistas.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(vistas, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("/vistas/{id}")
	public ResponseEntity<Vista> getReclamoById(@PathVariable("id") long id) {
		Optional<Vista> VistaData = vistaRepository.findById(id);

		if (VistaData.isPresent()) {
			return new ResponseEntity<>(VistaData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
