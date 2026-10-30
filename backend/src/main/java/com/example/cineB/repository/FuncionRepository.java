package com.example.cineB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cineB.entity.Funcion;

@Repository("funcionRepository")
public interface FuncionRepository extends JpaRepository<Funcion, Integer>{

}
