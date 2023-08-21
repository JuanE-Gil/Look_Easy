package com.bezkoder.springjwt.models;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vistas")
public class Vista {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name="viewers")
	private int viewers;
	
	@Column(name="pelicula_id")
	private Long pelicula;
	
	
	public Vista() {

	}
	
	public Vista(int viewers, Long pelicula) {
		this.viewers=viewers;
		this.pelicula=pelicula;
	}

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getViewers() {
		return viewers;
	}

	public void setViewers(int viewers) {
		this.viewers = viewers;
	}

	public Long getPelicula() {
		return pelicula;
	}

	public void setPelicula(Long pelicula) {
		this.pelicula = pelicula;
	}

	@Override
	public String toString() {
		return "Vista [id=" + id + ", viewers=" + viewers + ", pelicula=" + pelicula + "]";
	}
	
	
	
	

	

	

	

	
	
 
}

