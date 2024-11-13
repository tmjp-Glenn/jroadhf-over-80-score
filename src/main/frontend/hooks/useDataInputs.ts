import DataInputsDTO from "Frontend/generated/com/example/jroadhf/dto/DataInputsDTO"
import { DataInputsServiceCallable } from "Frontend/generated/endpoints"
import { InputSwitchData } from "Frontend/types/InputSwitch.type"
import { useEffect, useState } from "react"

export const useDataInputs = ()=>{
    const [data,setData]=useState<InputSwitchData[]>([])
    const getData = async()=>{
        try {
            const dataValue = await DataInputsServiceCallable.getDataInputs();
            if (dataValue) {
                const inputSwitchData:InputSwitchData[] = dataValue.map((item)=>({
                        label:item?.label || "",
                        value:item?.value || 0,
                        type:item?.type
                }))
                setData(inputSwitchData); 
            } else {
                setData([]); 
            }
        } catch (error) {
            console.error("Failed to fetch data inputs:", error);
            setData([]); // Optionally reset `data` on error
        }
    }
    useEffect(()=>{
        getData()
    },[])

    return {
        lnOutAge: data.filter(i=>i?.type=='age'),
        lnOutSex: data.filter(i=>i?.type=='gender'),
        lnOutBarthelIndex:data.filter(i=>i?.type=='barthel_index'),
        lnOutHistoryHf:data.filter(i=>i?.type=='history_hf'),
        lnOutSbp:data.filter(i=>i?.type=='sbp_admission'),
        lnOutHemoglobin: data.filter(i=>i?.type=='hemoglobin'),
        lnOutAlbumin: data.filter(i=>i?.type=='albumin'),
        lnOutBun:data.filter(i=>i?.type=='bun'),
        lnOutBnp:data.filter(i=>i?.type=='bnp'),
        lnOutSodium:data.filter(i=>i?.type=='sodium'),
        lnOutAceArbUse:data.filter(i=>i?.type=='ace_arm_use'),
    }
}