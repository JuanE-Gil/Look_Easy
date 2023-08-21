package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Calificacion;

public interface CalificacionRepository extends JpaRepository<Calificacion, Long>{
	
	List<Calificacion> findByIdContaining(double puntuacion);

}
