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

import com.example.cineB.entity.Genero;
import com.example.cineB.repository.GeneroRepository;

@RestController
@RequestMapping("/genero")
@CrossOrigin
public class GeneroService {

	@Autowired
	GeneroRepository gr;
	
	@GetMapping(path= "/buscar")
	public List<Genero> buscarGenero(){
		return gr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Genero guardarGenero(@RequestBody Genero genero) {
		return gr.save(genero);
	}
	
	@DeleteMapping(path = "/eliminar/{id_genero}")
	public void eliminarGenero(@PathVariable("id_genero") int id_genero) {
		gr.deleteById(id_genero);
	}
}
