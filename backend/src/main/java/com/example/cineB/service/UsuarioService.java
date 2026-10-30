package com.example.cineB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cineB.entity.Usuario;
import com.example.cineB.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
@CrossOrigin
public class UsuarioService {
	
	@Autowired
	UsuarioRepository ur;
	
	@GetMapping(path= "/buscar")
	public List<Usuario> buscarUsuario(){
		return ur.findAll();
		}

	@PostMapping (path= "/guardar")
	public Usuario guardarUsuario(@RequestBody Usuario usuario) {
		return ur.save(usuario);
	}
	
	@DeleteMapping(path = "/eliminar/{id_usuario}")
	public void eliminarUsuario(@PathVariable("id_usuario") int id_usuario) {
		ur.deleteById(id_usuario);
	}
	@PostMapping (path = "/login")
	public Usuario Login(@RequestBody Usuario usuario) {
		
		List<Usuario> usuarios = ur.findByCorreoAndContrasena(usuario.getCorreo(), usuario.getContrasena());
		if(usuarios.isEmpty()) {
			return null;
		}
		return usuarios.get(0);
	}
}
