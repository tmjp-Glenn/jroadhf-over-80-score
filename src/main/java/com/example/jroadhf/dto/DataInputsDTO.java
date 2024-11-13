package com.example.jroadhf.dto;

import java.sql.Timestamp;

import com.example.jroadhf.interfaces.DataInputInterface;

public class DataInputsDTO implements DataInputInterface  {
    private final int id;
    private final String label;
    private final Float value;
    private final Timestamp timestamp;
    private final String type; // additional column to distinguish types

    // Constructor that matches the columns from the query
    public DataInputsDTO(int id, String label, Float value, Timestamp timestamp, String type) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.timestamp = timestamp;
        this.type = type;
    }
        // Getters for DataInputInterface fields
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

        // Getter for the additional 'type' field
        public String getType() {
            return type;
        }

}
