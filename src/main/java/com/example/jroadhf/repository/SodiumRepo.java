package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.SodiumEntity;

public interface SodiumRepo  extends JpaRepository<SodiumEntity, Integer>,JpaSpecificationExecutor<SodiumEntity>{
    
}
