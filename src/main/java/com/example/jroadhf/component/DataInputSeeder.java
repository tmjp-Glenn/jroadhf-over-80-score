package com.example.jroadhf.component;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.jroadhf.dao.param.DataInputsParam;
import com.example.jroadhf.repository.AceArmUseRepo;
import com.example.jroadhf.repository.AgeRepo;
import com.example.jroadhf.repository.AlbuminRepo;
import com.example.jroadhf.repository.BarthelIndexRepo;
import com.example.jroadhf.repository.BnpRepo;
import com.example.jroadhf.repository.BunRepo;
import com.example.jroadhf.repository.GenderRepo;
import com.example.jroadhf.repository.HemoglobinRepo;
import com.example.jroadhf.repository.HistoryHFERepo;
import com.example.jroadhf.repository.SBPAdmissionRepo;
import com.example.jroadhf.repository.SodiumRepo;
import com.example.jroadhf.services.browser.DataInputsServiceCallable;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor

public class DataInputSeeder implements CommandLineRunner {

    private final AgeRepo ageRepo;
    private final GenderRepo genderRepo;
    private final AlbuminRepo albuminRepo;
    private final BarthelIndexRepo barthelIndexRepo;
    private final BnpRepo bnpRepo;
    private final BunRepo bunRepo;
    private final HemoglobinRepo hemoglobinRepo;
    private final HistoryHFERepo historyHFERepo;
    private final SBPAdmissionRepo sbpAdminssionRepo;
    private final SodiumRepo sodiumRepo;
    private final AceArmUseRepo aceArmUseRepo;

    private final DataInputsServiceCallable dataInputsServiceCallable;

    @Override
    public void run(String... args) {
        ageSeeder();
        genderSeeder();
        barthelIndexSeeder();
        historyHfSeeder();
        SbpAdmissionSeeder();
        hemoglobinSeeder();
        albuminSeeder();
        bunSeeder();
        sodiumSeeder();
        aceArmUseSeeder();
        bnpSeeder();

    }

    private void ageSeeder() {
        Long rows = ageRepo.count();

        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "80-84", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "85-89", 0.29129f, timestamp);
            DataInputsParam param3 = new DataInputsParam(2, "≥90", 0.43853f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2, param3);

            dataInputsServiceCallable.saveAgeInputData(params);
        } else {
            System.out.println("===========================> Age already has data");
        }
    }

    private void genderSeeder() {
        Long rows = genderRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "male", 0.51578f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "female", 0.0f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveGenderInputData(params);
        } else {
            System.out.println("===========================> Gender already has data");
        }
    }

    private void barthelIndexSeeder() {
        Long rows = barthelIndexRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "≥90", 0.0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "61-89", 0.34902f, timestamp);
            DataInputsParam param3 = new DataInputsParam(2, "≤60", 0.78954f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2, param3);

            dataInputsServiceCallable.saveBarthelIndexInputData(params);
        } else {
            System.out.println("===========================> Barthel Index already has data");
        }
    }

    private void historyHfSeeder() {
        Long rows = historyHFERepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "-", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "+", 0.35664f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveHistoryHFInputData(params);
        } else {
            System.out.println("===========================> History HF already has data");
        }
    }

    private void SbpAdmissionSeeder() {
        Long rows = sbpAdminssionRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "≥100", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "<100", 0.31585f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveSBPAdmissionInputData(params);
        } else {
            System.out.println("===========================> SBP Admission already has data");
        }
    }

    private void hemoglobinSeeder() {
        Long rows = hemoglobinRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "≥12", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "10-11.9", 0.23813f, timestamp);
            DataInputsParam param3 = new DataInputsParam(2, "<10", 0.40091f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2, param3);

            dataInputsServiceCallable.saveHemoglobinInputData(params);
        } else {
            System.out.println("===========================> Hemoglobin already has data");
        }
    }

    private void albuminSeeder() {
        Long rows = albuminRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "≥3", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "<3", 0.37812f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveAlbuminInputData(params);
        } else {
            System.out.println("===========================> Albumin already has data");
        }
    }

    private void bunSeeder() {
        Long rows = bunRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "<25", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "≥25", 0.21341f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveBunInputData(params);
        } else {
            System.out.println("===========================> Bun already has data");
        }
    }

    private void bnpSeeder() {
        Long rows = bnpRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "<300", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "≥300", 0.29743f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveBnpInputData(params);
        } else {
            System.out.println("===========================> BNP already has data");
        }
    }

    private void sodiumSeeder() {
        Long rows = sodiumRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "≥130", 0f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "<130", 0.60705f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveSodiumInputData(params);
        } else {
            System.out.println("===========================> Sodium already has data");
        }
    }

    private void aceArmUseSeeder() {
        Long rows = aceArmUseRepo.count();
        if (rows == 0) {
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            DataInputsParam param1 = new DataInputsParam(0, "-", 0.20517f, timestamp);
            DataInputsParam param2 = new DataInputsParam(1, "+", 0f, timestamp);
            List<DataInputsParam> params = Arrays.asList(param1, param2);

            dataInputsServiceCallable.saveAceArmUseInputData(params);
        } else {
            System.out.println("===========================> Ace Arm Use already has data");
        }
    }
}
