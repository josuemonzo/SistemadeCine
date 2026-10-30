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

import com.example.cineB.entity.Clasificacion;
import com.example.cineB.repository.ClasificacionRepository;

@RestController
@RequestMapping("/clasificacion")
@CrossOrigin
public class ClasificacionService {
	@Autowired
	ClasificacionRepository cr;
	
	@GetMapping(path= "/buscar")
	public List<Clasificacion> buscarClasificacion(){
		return cr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Clasificacion guardarClasificacion(@RequestBody Clasificacion clasificacion) {
		return cr.save(clasificacion);
	}
	
	@DeleteMapping(path = "/eliminar/{id_clasificacion}")
	public void eliminarClasificacion(@PathVariable("id_clasificacion") int id_clasificacion) {
		cr.deleteById(id_clasificacion);
	}
}
