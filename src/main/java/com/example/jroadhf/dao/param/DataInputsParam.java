package com.example.jroadhf.dao.param;

import java.sql.Timestamp;

import jakarta.persistence.Embeddable;

@Embeddable
public class DataInputsParam {
    private Integer id;
    private String label;
    private Float value;
    private Timestamp timeStamp;

    // Default constructor
    public DataInputsParam() {}

    // Constructor with parameters
    public DataInputsParam(Integer id,String label, Float value, Timestamp timeStamp) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.timeStamp = timeStamp;
    }

    // Getters and Setters
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Float getValue() {
        return value;
    }

    public void setValue(Float value) {
        this.value = value;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
