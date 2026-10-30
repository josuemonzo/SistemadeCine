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

import com.example.cineB.entity.DetalleReservaAsientos;
import com.example.cineB.repository.DetalleReservaAsientosRepository;

@RestController
@RequestMapping("/detalleReservaAsientos")
@CrossOrigin
public class DetalleReservaAsientosService {

	@Autowired
	DetalleReservaAsientosRepository drar;
	
	@GetMapping(path= "/buscar")
	public List<DetalleReservaAsientos> buscarDetalleReservaAsientos(){
		return drar.findAll();
		}

	@PostMapping (path= "/guardar")
	public DetalleReservaAsientos guardarDetalleReservaAsientos(@RequestBody DetalleReservaAsientos detalleReservaAsientos) {
		return drar.save(detalleReservaAsientos);
	}
	
	@DeleteMapping(path = "/eliminar/{id_detalleReservaAsientos}")
	public void eliminarDetalleReservaAsientos(@PathVariable("id_detalleReservaAsientos") int id_detalleReservaAsientos) {
		drar.deleteById(id_detalleReservaAsientos);
	}

}
