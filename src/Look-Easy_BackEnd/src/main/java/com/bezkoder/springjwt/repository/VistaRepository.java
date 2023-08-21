package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Vista;

public interface VistaRepository extends JpaRepository<Vista, Long>  {
	
	List<Vista> findByPeliculaContaining(Long pelicula);

}
