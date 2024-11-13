package com.example.jroadhf.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.jroadhf.entity.AgeEntity;

public interface AgeRepo extends JpaRepository<AgeEntity, Integer>,JpaSpecificationExecutor<AgeEntity> {

}
