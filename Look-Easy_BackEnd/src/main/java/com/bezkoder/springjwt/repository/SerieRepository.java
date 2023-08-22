package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bezkoder.springjwt.models.Serie;

public interface SerieRepository  extends JpaRepository<Serie, Long>{
	
	List<Serie> findByTituloContaining(String titulo);
}
