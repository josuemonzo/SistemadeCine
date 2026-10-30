package com.example.cineB.entity;

import java.io.Serializable;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "genero")
public class Genero implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 8810704253456820597L;
	
	@Id
	@Column(name="id_genero")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private int idGenero;
	
	@Column(name="nombre")
	private String nombre;

	public int getIdgenero() {
		return idGenero;
	}

	public void setIdgenero(int idgenero) {
		this.idGenero = idgenero;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	


}
