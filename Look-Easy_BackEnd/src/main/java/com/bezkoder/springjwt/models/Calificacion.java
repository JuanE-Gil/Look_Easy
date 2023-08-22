package com.bezkoder.springjwt.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "calificacion")
public class Calificacion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_Calificacion")
	private long id;

	private double puntacion;
	
	public Calificacion() {

	}
	
	public Calificacion(double puntacion) {
		this.puntacion=puntacion;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getPuntacion() {
		return puntacion;
	}

	public void setPuntacion(double puntacion) {
		this.puntacion = puntacion;
	}

	@Override
	public String toString() {
		return "Calificacion [id=" + id + ", puntacion=" + puntacion + "]";
	}
	
	
	
	
}
