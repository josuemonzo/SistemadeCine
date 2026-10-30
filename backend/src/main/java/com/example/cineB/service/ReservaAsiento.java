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

import com.example.cineB.entity.Reserva;
import com.example.cineB.repository.ReservaRepository;

@RestController
@RequestMapping("/reserva")
@CrossOrigin
public class ReservaAsiento {

	@Autowired
	ReservaRepository rvr;
	
	@GetMapping(path= "/buscar")
	public List<Reserva> buscarReserva(){
		return rvr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Reserva guardarReserva(@RequestBody Reserva reserva) {
		return rvr.save(reserva);
	}
	
	@DeleteMapping(path = "/eliminar/{id_reserva}")
	public void eliminarReserva(@PathVariable("id_reserva") int id_reserva) {
		rvr.deleteById(id_reserva);
	}

}
