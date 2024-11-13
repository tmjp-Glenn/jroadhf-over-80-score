package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.HistoryHFEntity;

public interface HistoryHFERepo  extends JpaRepository<HistoryHFEntity, Integer>,JpaSpecificationExecutor<HistoryHFEntity> {
    
}
