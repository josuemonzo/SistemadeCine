package com.example.cineB.entity;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "funcion")
public class Funcion implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2433883689132523505L;
	
	@Id
	@Column(name="id_funcion")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	private int idFuncion;
	
	@Column(name="fecha")
	private Date fecha;
	
	@Column(name="hora")
	private Time hora;

	@Column(name="precio_entrada")
	private String precioEntrada;
	
	@Column(name="id_pelicula")
	private Integer idPelicula;
	
	@Column(name="id_sala")
	private Integer idSala;

	public int getIdFuncion() {
		return idFuncion;
	}

	public void setIdFuncion(int idFuncion) {
		this.idFuncion = idFuncion;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Time getHora() {
		return hora;
	}

	public void setHora(Time hora) {
		this.hora = hora;
	}

	public String getPrecioEntrada() {
		return precioEntrada;
	}

	public void setPrecioEntrada(String precioEntrada) {
		this.precioEntrada = precioEntrada;
	}

	public Integer getIdPelicula() {
		return idPelicula;
	}

	public void setIdPelicula(Integer idPelicula) {
		this.idPelicula = idPelicula;
	}

	public Integer getIdSala() {
		return idSala;
	}

	public void setIdSala(Integer idSala) {
		this.idSala = idSala;
	}
	
	

}
