package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Suscripcion;

public interface  SuscripcionRepository  extends JpaRepository<Suscripcion, Long>{
	
	List<Suscripcion> findByPlanContaining(String plan);
}
