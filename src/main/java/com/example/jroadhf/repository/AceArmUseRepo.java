package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.AceArmUseEntity;

public interface AceArmUseRepo  extends JpaRepository<AceArmUseEntity, Integer>,JpaSpecificationExecutor<AceArmUseEntity> {
    
}
