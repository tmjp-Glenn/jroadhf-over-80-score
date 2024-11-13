package com.example.jroadhf.services.browser;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.jroadhf.dao.param.DataInputsParam;
import com.example.jroadhf.dto.DataInputsDTO;
import com.example.jroadhf.entity.AceArmUseEntity;
import com.example.jroadhf.entity.AgeEntity;
import com.example.jroadhf.entity.AlbuminEntity;
import com.example.jroadhf.entity.BarthelIndexEntity;
import com.example.jroadhf.entity.BnpEntity;
import com.example.jroadhf.entity.BunEntity;
import com.example.jroadhf.entity.GenderEntity;
import com.example.jroadhf.entity.HemoglobinEntity;
import com.example.jroadhf.entity.HistoryHFEntity;
import com.example.jroadhf.entity.SBPAdmission;
import com.example.jroadhf.entity.SodiumEntity;
import com.example.jroadhf.repository.AceArmUseRepo;
import com.example.jroadhf.repository.AgeRepo;
import com.example.jroadhf.repository.AlbuminRepo;
import com.example.jroadhf.repository.BarthelIndexRepo;
import com.example.jroadhf.repository.BnpRepo;
import com.example.jroadhf.repository.BunRepo;
import com.example.jroadhf.repository.DataInputsRepo;
import com.example.jroadhf.repository.GenderRepo;
import com.example.jroadhf.repository.HemoglobinRepo;
import com.example.jroadhf.repository.HistoryHFERepo;
import com.example.jroadhf.repository.SBPAdmissionRepo;
import com.example.jroadhf.repository.SodiumRepo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import jakarta.annotation.security.PermitAll;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;

@PermitAll
@AnonymousAllowed
@BrowserCallable
@AllArgsConstructor
@Service
public class DataInputsServiceCallable  {

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

    private final DataInputsRepo dataInputsRepo;
    @NotNull
     public List<DataInputsDTO> getDataInputs(){
        return Optional.ofNullable(dataInputsRepo.getDataInputsValue())
        .orElseGet(Collections::emptyList);
    }

    

 public void saveAgeInputData(List<DataInputsParam> dataInputsParams) {
        List<AgeEntity> ageEntities = dataInputsParams.stream()
            .map(param -> AgeEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        ageRepo.saveAll(ageEntities);
    }

    public void saveGenderInputData(List<DataInputsParam> dataInputsParams) {
        List<GenderEntity> genderEntities = dataInputsParams.stream()
            .map(param -> GenderEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        genderRepo.saveAll(genderEntities);
    }

    public void saveAlbuminInputData(List<DataInputsParam> dataInputsParams) {
        List<AlbuminEntity> albuminEntities = dataInputsParams.stream()
            .map(param -> AlbuminEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        albuminRepo.saveAll(albuminEntities);
    }

    public void saveBarthelIndexInputData(List<DataInputsParam> dataInputsParams) {
        List<BarthelIndexEntity> barthelIndexEntities = dataInputsParams.stream()
            .map(param -> BarthelIndexEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        barthelIndexRepo.saveAll(barthelIndexEntities);
    }

    public void saveBnpInputData(List<DataInputsParam> dataInputsParams) {
        List<BnpEntity> bnpEntities = dataInputsParams.stream()
            .map(param -> BnpEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        bnpRepo.saveAll(bnpEntities);
    }

    public void saveBunInputData(List<DataInputsParam> dataInputsParams) {
        List<BunEntity> bunEntities = dataInputsParams.stream()
            .map(param -> BunEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        bunRepo.saveAll(bunEntities);
    }

    public void saveHemoglobinInputData(List<DataInputsParam> dataInputsParams) {
        List<HemoglobinEntity> hemoglobinEntities = dataInputsParams.stream()
            .map(param -> HemoglobinEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        hemoglobinRepo.saveAll(hemoglobinEntities);
    }

    public void saveHistoryHFInputData(List<DataInputsParam> dataInputsParams) {
        List<HistoryHFEntity> historyHFEntities = dataInputsParams.stream()
            .map(param -> HistoryHFEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        historyHFERepo.saveAll(historyHFEntities);
    }

    public void saveSBPAdmissionInputData(List<DataInputsParam> dataInputsParams) {
        List<SBPAdmission> sbpAdmissionEntities = dataInputsParams.stream()
            .map(param -> SBPAdmission.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        sbpAdminssionRepo.saveAll(sbpAdmissionEntities);
    }

    public void saveSodiumInputData(List<DataInputsParam> dataInputsParams) {
        List<SodiumEntity> sodiumEntities = dataInputsParams.stream()
            .map(param -> SodiumEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        sodiumRepo.saveAll(sodiumEntities);
    }

    public void saveAceArmUseInputData(List<DataInputsParam> dataInputsParams) {
        List<AceArmUseEntity> aceArmUseEntities = dataInputsParams.stream()
            .map(param -> AceArmUseEntity.builder()
                .id(param.getId())
                .label(param.getLabel())
                .value(param.getValue())
                .timestamp(param.getTimeStamp())
                .build())
            .collect(Collectors.toList());

        aceArmUseRepo.saveAll(aceArmUseEntities);
    }
}
