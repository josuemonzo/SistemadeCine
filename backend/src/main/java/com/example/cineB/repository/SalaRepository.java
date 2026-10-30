package com.example.cineB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cineB.entity.Sala;

@Repository("salaRepository")
public interface SalaRepository extends JpaRepository<Sala, Integer>{

}
