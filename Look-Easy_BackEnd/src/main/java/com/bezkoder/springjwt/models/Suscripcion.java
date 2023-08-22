package com.bezkoder.springjwt.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "suscripcion")
public class Suscripcion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "ID_Usuario")
    private long idUsuario;
    
    @Column(name = "Nombre")
    private String nombre;

    @Column(name = "Plan")
    private String plan;

    @Column(name = "fecha_inicio")
    private String fechaInicio;

    @Column(name = "fecha_fin")
    private String fechaFin;

    public Suscripcion() {

    }

    public Suscripcion(long idUsuario, String plan, String fechaInicio, String fechaFin) {
        this.idUsuario = idUsuario;
        this.plan = plan;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }




    
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(long idUsuario) {
        this.idUsuario = idUsuario;
    }
    
    

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPlan() {
		return plan;
	}

	public void setPlan(String plan) {
		this.plan = plan;
	}

	public String getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public String getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(String fechaFin) {
		this.fechaFin = fechaFin;
	}

	@Override
	public String toString() {
		return "Suscripcion [id=" + id + ", idUsuario=" + idUsuario + ", nombre=" + nombre + ", plan=" + plan
				+ ", fechaInicio=" + fechaInicio + ", fechaFin=" + fechaFin + "]";
	}

	

	
    
    
}

