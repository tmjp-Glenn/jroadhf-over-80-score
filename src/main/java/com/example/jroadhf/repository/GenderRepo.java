package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.GenderEntity;

public interface GenderRepo extends JpaRepository<GenderEntity, Integer>,JpaSpecificationExecutor<GenderEntity>{
    
}
