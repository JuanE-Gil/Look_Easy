package com.bezkoder.springjwt.models;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "reclamos")
public class Reclamo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="Defecto")
	private String defecto;

	@Column(name="Asunto")
	private String asunto;
	
	@Column(name="usuario_id")
	private Long user;
	
	public Reclamo() {

	}
	
	public Reclamo(String defecto, int user, String asunto) {
		this.defecto=defecto;
		this.asunto=asunto;
	}

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public Long getUser() {
		return user;
	}

	public void setUser(Long user) {
		this.user = user;
	}


	public String getDefecto() {
		return defecto;
	}

	public void setDefecto(String defecto) {
		this.defecto = defecto;
	}

	public String getAsunto() {
		return asunto;
	}

	public void setAsunto(String asunto) {
		this.asunto = asunto;
	}

	@Override
	public String toString() {
		return "Reclamo [id=" + id + ", defecto=" + defecto + ", asunto=" + asunto + ", user=" + user + "]";
	}

	
	

	

	

	

	
	
 
}
