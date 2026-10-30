package com.example.cineB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cineB.entity.DetalleReservaAsientos;

@Repository("detalleReservaAsientosRepository")
public interface DetalleReservaAsientosRepository extends JpaRepository<DetalleReservaAsientos, Integer>{

}
