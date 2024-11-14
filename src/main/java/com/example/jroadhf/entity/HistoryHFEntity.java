package com.example.jroadhf.entity;

import java.sql.Timestamp;

import com.example.jroadhf.interfaces.DataInputInterface;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;

@Entity
@Builder
@Table(name="history_hf")
public class HistoryHFEntity implements DataInputInterface {
    @Id
    private int id;
    
    private String label;
    private Float value;
    private Timestamp timestamp;
    public HistoryHFEntity() {}

    public HistoryHFEntity(int id, String label, Float value, Timestamp timestamp) {
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