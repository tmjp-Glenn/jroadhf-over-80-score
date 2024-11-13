package com.example.jroadhf.entity;

import java.sql.Timestamp;

import com.example.jroadhf.interfaces.DataInputInterface;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;

@Entity
@Table(name="albumin")
@Builder
public class AlbuminEntity implements DataInputInterface {
    @Id
private int id;

private String label;
private Float value;
private Timestamp timestamp;
public AlbuminEntity() {}

public AlbuminEntity(int id, String label, Float value, Timestamp timestamp) {
    this.id = id;
    this.label = label;
    this.value = value;
    this.timestamp = timestamp;
}

@Override
public int getId() {
    return id;
}

@Override
public String getLabel() {
    return label;
}

@Override
public Float getValue() {
    return value;
}

@Override
public Timestamp getTimestamp() {
   return timestamp;
}


}