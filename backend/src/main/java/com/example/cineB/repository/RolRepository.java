package com.example.cineB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cineB.entity.Rol;

@Repository("rolRepository")
public interface RolRepository extends JpaRepository <Rol, Integer>{

}
