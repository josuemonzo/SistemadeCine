package com.example.cineB.entity;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "anuncio")
public class Anuncio implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2463336431147643500L;
	
	@Id
	@Column(name="id_anuncio")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private int idAnuncio;
	
	@Column(name="titulo")
	private String titulo;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="fecha_publicacion")
	private Date fechaPublicaion;
	
	public int getIdAnuncio() {
		return idAnuncio;
	}

	public void setIdAnuncio(int idAnuncio) {
		this.idAnuncio = idAnuncio;
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

	public Date getFechaPublicaion() {
		return fechaPublicaion;
	}

	public void setFechaPublicaion(Date fechaPublicaion) {
		this.fechaPublicaion = fechaPublicaion;
	}
	
}
