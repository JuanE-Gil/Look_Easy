package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Pelicula;


public interface PeliculaRepository extends JpaRepository<Pelicula, Long>{
	
	List<Pelicula> findByTituloContaining(String titulo);
}
