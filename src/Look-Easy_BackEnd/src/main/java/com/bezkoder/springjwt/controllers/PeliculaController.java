package com.bezkoder.springjwt.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Pelicula;
import com.bezkoder.springjwt.repository.PeliculaRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class PeliculaController {
	
	@Autowired
	PeliculaRepository tutorialRepository;
	

	@GetMapping("/peliculas")
	public ResponseEntity<List<Pelicula>> getAllTutorials(@RequestParam(required = false) String titulo) {
		try {
			List<Pelicula> peliculas = new ArrayList<Pelicula>();

			if (titulo == null)
				tutorialRepository.findAll().forEach(peliculas::add);
			else
				tutorialRepository.findByTituloContaining(titulo).forEach(peliculas::add);

			if (peliculas.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(peliculas, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/peliculas/{id}")
	public ResponseEntity<Pelicula> getTutorialById(@PathVariable("id") long id) {
		Optional<Pelicula> tutorialData = tutorialRepository.findById(id);

		if (tutorialData.isPresent()) {
			return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/peliculas")
	public ResponseEntity<Pelicula> createTutorial(@RequestBody Pelicula pelicula) {
		try {
			Pelicula  _tutorial = tutorialRepository
					.save(new Pelicula(pelicula.getTitulo(), pelicula.getDescripcion(), pelicula.getAnio(),
							pelicula.getDuracion(), pelicula.getGenero(), pelicula.getImagen()));
			return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/peliculas/{id}")
	public ResponseEntity<Pelicula> updateTutorial(@PathVariable("id") long id, @RequestBody Pelicula pelicula) {
		Optional<Pelicula> tutorialData = tutorialRepository.findById(id);

		if (tutorialData.isPresent()) {
			Pelicula _tutorial = tutorialData.get();
			_tutorial.setTitulo(pelicula.getTitulo());
			_tutorial.setDescripcion(pelicula.getDescripcion());
			_tutorial.setAnio(pelicula.getAnio());
			_tutorial.setDuracion(pelicula.getDuracion());
			_tutorial.setGenero(pelicula.getGenero());
			_tutorial.setImagen(pelicula.getImagen());
			return new ResponseEntity<>(tutorialRepository.save(_tutorial), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/peliculas/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			tutorialRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/peliculas")
	public ResponseEntity<HttpStatus> deleteAllTutorials() {
		try {
			tutorialRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}