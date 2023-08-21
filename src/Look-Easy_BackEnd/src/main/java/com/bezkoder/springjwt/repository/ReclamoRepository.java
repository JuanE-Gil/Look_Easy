package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Reclamo;

public interface ReclamoRepository extends JpaRepository<Reclamo, Long> {

	List<Reclamo> findByDefectoContaining(String defecto);
}
