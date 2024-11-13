package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.BarthelIndexEntity;

public interface BarthelIndexRepo extends JpaRepository<BarthelIndexEntity, Integer>,JpaSpecificationExecutor<BarthelIndexEntity> {
    
}
