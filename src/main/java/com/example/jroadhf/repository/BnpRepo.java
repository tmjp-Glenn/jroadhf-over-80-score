package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.BnpEntity;

public interface BnpRepo extends JpaRepository<BnpEntity, Integer>,JpaSpecificationExecutor<BnpEntity> {
    
}
