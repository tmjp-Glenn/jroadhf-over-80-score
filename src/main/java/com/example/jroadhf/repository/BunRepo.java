package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.BunEntity;

public interface BunRepo extends JpaRepository<BunEntity, Integer>,JpaSpecificationExecutor<BunEntity> {
    
}
