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

import com.bezkoder.springjwt.models.Serie;
import com.bezkoder.springjwt.repository.SerieRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class SerieController {

	
	@Autowired
	SerieRepository serieRepository;

	@GetMapping("/series")
	public ResponseEntity<List<Serie>> getAllSeries(@RequestParam(required = false) String titulo) {
		try {
			List<Serie> series = new ArrayList<Serie>();

			if (titulo == null)
				serieRepository.findAll().forEach(series::add);
			else
				serieRepository.findByTituloContaining(titulo).forEach(series::add);

			if (series.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(series, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/series/{id}")
	public ResponseEntity<Serie> getSerieById(@PathVariable("id") long id) {
		Optional<Serie> serieData = serieRepository.findById(id);

		if (serieData.isPresent()) {
			return new ResponseEntity<>(serieData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/series")
	public ResponseEntity<Serie> createSerie(@RequestBody Serie serie) {
		try {
			Serie  _serie = serieRepository
					.save(new Serie(serie.getTitulo(), serie.getDescripcion(), serie.getAnio(),
							serie.getDuracion(),serie.getEpisodios(), serie.getGenero(), serie.getImagen()));
			return new ResponseEntity<>(_serie, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/series/{id}")
	public ResponseEntity<Serie> updateSerie(@PathVariable("id") long id, @RequestBody Serie serie) {
		Optional<Serie> serieData = serieRepository.findById(id);

		if (serieData.isPresent()) {
			Serie _serie = serieData.get();
			_serie.setTitulo(serie.getTitulo());
			_serie.setDescripcion(serie.getDescripcion());
			_serie.setAnio(serie.getAnio());
			_serie.setDuracion(serie.getAnio());
			_serie.setEpisodios(serie.getEpisodios());
			_serie.setGenero(serie.getGenero());
			_serie.setImagen(serie.getImagen());
			
			return new ResponseEntity<>(serieRepository.save(_serie), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/series/{id}")
	public ResponseEntity<HttpStatus> deleteSerie(@PathVariable("id") long id) {
		try {
			serieRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/Series")
	public ResponseEntity<HttpStatus> deleteAllSeries() {
		try {
			serieRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
