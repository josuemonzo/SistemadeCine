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

import com.example.cineB.entity.Anuncio;
import com.example.cineB.repository.AnuncioRepository;

@RestController
@RequestMapping("/anuncio")
@CrossOrigin
public class AnuncioService {

	@Autowired
	AnuncioRepository ar;
	
	@GetMapping(path= "/buscar")
	public List<Anuncio> buscarAnuncio(){
		return ar.findAll();
		}

	@PostMapping (path= "/guardar")
	public Anuncio guardarAnuncio(@RequestBody Anuncio anuncio) {
		return ar.save(anuncio);
	}
	
	@DeleteMapping(path = "/eliminar/{id_anuncio}")
	public void eliminarAnuncio(@PathVariable("id_anuncio") int id_anuncio) {
		ar.deleteById(id_anuncio);
	}
}
