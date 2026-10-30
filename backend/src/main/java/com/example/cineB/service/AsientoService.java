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

import com.example.cineB.entity.Asiento;
import com.example.cineB.entity.Rol;
import com.example.cineB.repository.AsientoRepository;

@RestController
@RequestMapping("/asiento")
@CrossOrigin
public class AsientoService {

	@Autowired
	AsientoRepository asr;
	
	@GetMapping(path= "/buscar")
	public List<Asiento> buscarAsiento(){
		return asr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Asiento guardarAsiento(@RequestBody Asiento asiento) {
		return asr.save(asiento);
	}
	
	@DeleteMapping(path = "/eliminar/{id_asiento}")
	public void eliminarAsiento(@PathVariable("id_asiento") int id_asiento) {
		asr.deleteById(id_asiento);
	}
}
