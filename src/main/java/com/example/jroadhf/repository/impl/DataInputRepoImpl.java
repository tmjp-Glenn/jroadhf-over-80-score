package com.example.jroadhf.repository.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.jroadhf.dto.DataInputsDTO;
import com.example.jroadhf.interfaces.DataInputInterface;
import com.example.jroadhf.repository.DataInputsRepo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

@Repository
public class DataInputRepoImpl implements DataInputsRepo {

     @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<DataInputsDTO> getDataInputsValue() {
        Query query = entityManager.createNativeQuery(
            """
                SELECT id, label, value, timestamp, 'age' AS type FROM age
            UNION ALL
                SELECT id, label, value, timestamp, 'albumin' AS type FROM albumin
            UNION ALL
                SELECT id, label, value, timestamp, 'bun' AS type FROM bun
            UNION ALL
                SELECT id, label, value, timestamp, 'ace_arm_use' AS type FROM ace_arm_use
            UNION ALL
                SELECT id, label, value, timestamp, 'gender' AS type FROM gender
            UNION ALL
                SELECT id, label, value, timestamp, 'history_hf' AS type FROM history_hf
            UNION ALL
                SELECT id, label, value, timestamp, 'sbp_admission' AS type FROM sbp_admission
            UNION ALL
                SELECT id, label, value, timestamp, 'sodium' AS type FROM sodium
            UNION ALL
                SELECT id, label, value, timestamp, 'bnp' AS type FROM bnp
            UNION ALL
                SELECT id, label, value, timestamp, 'hemoglobin' AS type FROM hemoglobin
            UNION ALL
                SELECT id, label, value, timestamp, 'barthel_index' AS type FROM barthel_index
            """
        );

        @SuppressWarnings("unchecked")
        List<DataInputInterface[]> results = query.getResultList();
        List<DataInputsDTO> dataList = new ArrayList<>();

        for (Object[] row : results) {
            DataInputsDTO dto = new DataInputsDTO(
                (Integer) row[0],             // id
                (String) row[1],              // label
                (Float)row[2],              // value
                (Timestamp) row[3],       // timestamp
                (String) row[4]               // type
            );
            dataList.add(dto);
        }
        return dataList;
    }
    
}
