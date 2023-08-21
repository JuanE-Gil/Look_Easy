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

	private double puntuacion;
	
	public Calificacion() {

	}
	
	public Calificacion(double puntuacion) {
		this.setPuntuacion(puntuacion);
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getPuntuacion() {
		return puntuacion;
	}

	public void setPuntuacion(double puntuacion) {
		this.puntuacion = puntuacion;
	}

	@Override
	public String toString() {
		return "Calificacion [id=" + id + ", puntuacion=" + puntuacion + "]";
	}
	
	
	
	
	
	
}
