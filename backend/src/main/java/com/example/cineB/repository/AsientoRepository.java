package com.example.cineB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cineB.entity.Asiento;

@Repository("asientoRepository")
public interface AsientoRepository extends JpaRepository<Asiento, Integer>{

}
