package com.example.cineB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cineB.entity.Funcion;
import com.example.cineB.repository.FuncionRepository;

@RestController
@RequestMapping("/funcion")
@CrossOrigin
public class FuncionService {

	@Autowired
	FuncionRepository fr;
	
	@GetMapping(path= "/buscar")
	public List<Funcion> buscarFuncion(){
		return fr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Funcion guardarFuncion(@RequestBody Funcion funcion) {
		return fr.save(funcion);
	}
	
	@DeleteMapping(path = "/eliminar/{id_funcion}")
	public void eliminarFuncion(@PathVariable("id_funcion") int id_funcion) {
		fr.deleteById(id_funcion);
	}

}
