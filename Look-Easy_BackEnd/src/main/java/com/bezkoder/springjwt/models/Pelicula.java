package com.bezkoder.springjwt.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "peliculas")
public class Pelicula {
	
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
	
	@Column(name="Genero")
	private String genero;
	
	@Column(name="Imagen")
	private String imagen;
	
	

	
	public Pelicula() {

	}
	
	public Pelicula(String titulo, String descripcion, int anio, int duracion, String genero, String imagen) {
		this.titulo=titulo;
		this.descripcion=descripcion;
		this.anio=anio;
		this.duracion=duracion;
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
		return "Pelicula [id=" + id + ", titulo=" + titulo + ", descripcion=" + descripcion + ", anio=" + anio
				+ ", duracion=" + duracion + ", genero=" + genero + ", imagen=" + imagen + "]";
	}

	

	

	

	

	
	
	
}
