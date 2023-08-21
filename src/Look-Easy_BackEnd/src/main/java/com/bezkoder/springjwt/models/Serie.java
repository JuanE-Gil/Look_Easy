package com.bezkoder.springjwt.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "series")
public class Serie {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name="Titulo")
	private String titulo;
	
	@Column(name="Descripcion")
	private String descripcion;
	  
	@Column(name="Año")
	private int anio;
	
	@Column(name="Duracion")
	private int duracion;
	
	@Column(name="Episodios")
	private int episodios;
	
	@Column(name="Genero")
	private String genero;
	
	@Column(name="Imagen")
	private String imagen;
	
	public Serie() {

	}
	
	public Serie(String titulo, String descripcion, int anio, int duracion, int episodios, String genero, String imagen) {
		this.titulo=titulo;
		this.descripcion=descripcion;
		this.anio=anio;
		this.duracion=duracion;
		this.episodios=episodios;
		this.genero=genero;
		this.imagen=imagen;
		
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}

	public int getDuracion() {
		return duracion;
	}

	public void setDuracion(int duracion) {
		this.duracion = duracion;
	}

	public int getEpisodios() {
		return episodios;
	}

	public void setEpisodios(int episodios) {
		this.episodios = episodios;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	@Override
	public String toString() {
		return "Serie [id=" + id + ", titulo=" + titulo + ", descripcion=" + descripcion + ", anio=" + anio
				+ ", duracion=" + duracion + ", episodios=" + episodios + ", genero=" + genero + ", imagen=" + imagen
				+ "]";
	}

	
	
	
	

	
	
}
