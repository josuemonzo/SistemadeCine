package com.example.cineB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cineB.entity.Clasificacion;

@Repository("clasificacionRepository")
public interface ClasificacionRepository extends JpaRepository<Clasificacion, Integer>{

}
