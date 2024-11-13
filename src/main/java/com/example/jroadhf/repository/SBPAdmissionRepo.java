package com.example.jroadhf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.SBPAdmission;

public interface SBPAdmissionRepo  extends JpaRepository<SBPAdmission, Integer>,JpaSpecificationExecutor<SBPAdmission>{
    
}
