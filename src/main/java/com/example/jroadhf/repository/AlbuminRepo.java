package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.AlbuminEntity;

public interface AlbuminRepo extends JpaRepository<AlbuminEntity, Integer>,JpaSpecificationExecutor<AlbuminEntity> {
    
}
