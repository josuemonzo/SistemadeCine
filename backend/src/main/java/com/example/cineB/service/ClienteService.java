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

import com.example.cineB.entity.Cliente;
import com.example.cineB.repository.ClienteRepository;

@RestController
@RequestMapping("/cliente")
@CrossOrigin

public class ClienteService {
	@Autowired
	ClienteRepository ctr;
	
	@GetMapping(path= "/buscar")
	public List<Cliente> buscarCliente(){
		return ctr.findAll();
		}

	@PostMapping (path= "/guardar")
	public Cliente guardarCliente(@RequestBody Cliente cliente) {
		return ctr.save(cliente);
	}
	
	@DeleteMapping(path = "/eliminar/{id_cliente}")
	public void eliminarCliente(@PathVariable("id_cliente") int id_cliente) {
		ctr.deleteById(id_cliente);
	}
}
