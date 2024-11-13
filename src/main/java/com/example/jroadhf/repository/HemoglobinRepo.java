package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.HemoglobinEntity;

public interface HemoglobinRepo  extends JpaRepository<HemoglobinEntity, Integer>,JpaSpecificationExecutor<HemoglobinEntity>  {
    
}
