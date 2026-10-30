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

import com.example.cineB.entity.Pelicula;
import com.example.cineB.repository.PeliculaRepository;

@RestController
@RequestMapping("/pelicula")
@CrossOrigin
public class PeliculaService {
	
	@Autowired
	PeliculaRepository pr;
	
	@GetMapping(path= "/buscar")
	public List<Pelicula> buscarPelicula(){
		return pr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Pelicula guardarPelicula(@RequestBody Pelicula pelicula) {
		return pr.save(pelicula);
	}
	
	@DeleteMapping(path = "/eliminar/{id_pelicula}")
	public void eliminarPelicula(@PathVariable("id_pelicula") int id_pelicula) {
		pr.deleteById(id_pelicula);
	}

}
