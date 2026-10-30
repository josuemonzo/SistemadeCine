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

import com.example.cineB.entity.Sala;
import com.example.cineB.repository.SalaRepository;

@RestController
@RequestMapping("/sala")
@CrossOrigin
public class SalaService {

	@Autowired
	SalaRepository sr;
	
	@GetMapping(path= "/buscar")
	public List<Sala> buscarSala(){
		return sr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Sala guardarSala(@RequestBody Sala sala) {
		return sr.save(sala);
	}
	
	@DeleteMapping(path = "/eliminar/{id_sala}")
	public void eliminarSala(@PathVariable("id_sala") int id_sala) {
		sr.deleteById(id_sala);
	}
}
