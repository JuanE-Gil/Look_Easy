package com.bezkoder.springjwt.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Calificacion;
import com.bezkoder.springjwt.repository.CalificacionRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class CalificacionesController {

	@Autowired
	CalificacionRepository calificacionRepository;
	
	@GetMapping("/calificacion")
	
	public ResponseEntity<List<Calificacion>> getAllCalificacion(@RequestParam(required = false) double puntuacion) {
		try {
			List<Calificacion> calificar = new ArrayList<Calificacion>();
			if (calificar == null)
				calificacionRepository.findAll().forEach(calificar::add);
			else
				calificacionRepository.findByIdContaining(puntuacion).forEach(calificar::add);

			if (calificar.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(calificar, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
