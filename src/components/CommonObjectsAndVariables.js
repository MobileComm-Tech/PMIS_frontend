export const pagination = { page: 1, limit: 50 };
export const range = { start: 1, end: 7 };
export const masterUnitRateWithActivityFilter="isActivity=True"




// old function
// export const calculateCompletionCriteriaPaylaod =(itemCodeAllInputs,data,mileStoneName)=>{
//      let falseKey = false;
//         for (let i = 0; i < itemCodeAllInputs.length/2; i++) {
//             const itemCode = data[`itemCode0${i+1}`]?.trim();
//             const quantityCode = data[`quantity0${i+1}`];

//             if (
//                 (itemCode && !quantityCode) ||
//                 (!itemCode && quantityCode)
//             ) {
//                 falseKey = true;
//                 break;
//             }
//         }
        
//         if (falseKey) {
//             alert("Please select the Quantity Code for all the filled ItemCodes (and vice versa).");
//             return false;
//         }
//             let totalAmount= 0;
//            for (let i = range.start; i <= range.end; i++) {
//             const quantityKey = `quantity0${i}`;
//             const itemCodeKey = `itemCode0${i}`;
//             const itemDescriptionKey=`itemCodeDescription0${i}`
//             const itemRate=`itemRate0${i}`;

//             const itemCodeValueData = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[0]:""
//             const itemCodeRateData = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[1]:""
//             // const itemCodeDescription = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[2]:""
//             const itemCodeDescription =data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",").slice(2).join(",") :""


            
            
//             const quantityValue = data[quantityKey];

//             if (quantityValue && quantityValue !== "") {
//                 const numbericQuantity = Number(quantityValue);


//                 if (isNaN(numbericQuantity)) {
//                     alert(`Quantity ${i} must be a valid number.`);
//                     return false;
//                 }

//                 if (numbericQuantity < 0 ) {
//                     alert(`Quantity ${i} cannot be less than ${numbericQuantity}`);
//                     return false;
//                 }
//                 // else if(numbericQuantity>50000 ){
//                 //     alert(`Quantity ${i} should be less than 50000`);
//                 //     return;
//                 // }

//                 totalAmount+=Number(itemCodeRateData)*Number(quantityValue);
//                 if(['MS1']?.includes(mileStoneName)){
//                 data[itemRate] = Number(itemCodeRateData);
//                 data[itemCodeKey]=itemCodeValueData;
//                 data[itemDescriptionKey] = itemCodeDescription
//                 data[quantityKey] = numbericQuantity;
//                 }
//             }
//         }
//          data['amount'] = totalAmount;
//          return data;
// }





// export const  quantitySelectTypeOptions =(changeTo)=>{
//     console.log("callingtime")
//     const optionQuantityArray=[]
//     for( let i=1;i<=11;i++){

//         let quantityIndexOptions={}
//         if(i<11){
//             quantityIndexOptions={
//             label:i,
//             value:i
//         }
//         }else{
//               quantityIndexOptions={
//             label:"Custom Quantity",
//             value:changeTo
//         }
//         }
//         optionQuantityArray.push(quantityIndexOptions);
//     }
//     console.log(optionQuantityArray,"___optionQuantityArray__")

//     return optionQuantityArray
// }


//New function

export const calculateCompletionCriteriaPaylaod =(itemCodeAllInputs,data,mileStoneName)=>{
     let falseKey = false;
        for (let i = 0; i < itemCodeAllInputs.length/2; i++) {
            const itemCode = data[`itemCode0${i+1}`]?.trim();
            const quantityCode = data[`quantity0${i+1}`];

            if (
                ((itemCode && !quantityCode) ||
                (!itemCode && quantityCode))&& i===0
            ) {
                falseKey = true;
                break;
            }
        }
        
        if (falseKey) {
            alert("Please select the Quantity Code for all the filled ItemCodes (and vice versa).");
            return false;
        }
            let totalAmount= 0;
           for (let i = range.start; i <= range.end; i++) {
            const quantityKey = `quantity0${i}`;
            const itemCodeKey = `itemCode0${i}`;
            const itemDescriptionKey=`itemCodeDescription0${i}`
            const itemRate=`itemRate0${i}`;

            const itemCodeValueData = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[0]:""
            const itemCodeRateData = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[1]:""
            // const itemCodeDescription = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[2]:""
            const itemCodeDescription =data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",").slice(2).join(",") :""


            
            
            const quantityValue = data[quantityKey];


            if (quantityValue && quantityValue !== "") {
                const numbericQuantity = Number(quantityValue);


                if (isNaN(numbericQuantity)) {
                    alert(`Quantity ${i} must be a valid number.`);
                    return false;
                }

                if (numbericQuantity < 0 ) {
                    alert(`Quantity ${i} cannot be less than ${numbericQuantity}`);
                    return false;
                }
                // else if(numbericQuantity>50000 ){
                //     alert(`Quantity ${i} should be less than 50000`);
                //     return;
                // }

                totalAmount+=Number(itemCodeRateData)*Number(quantityValue);
                if(['MS1']?.includes(mileStoneName)){
                data[itemRate] = Number(itemCodeRateData);
                data[itemCodeKey]=itemCodeValueData;
                data[itemDescriptionKey] = itemCodeDescription
                data[quantityKey] = numbericQuantity;
                }
            }
            if(i==2){
                // console.log(data[itemCodeKey],"___itemCodeKey__")
            }
            if(data[itemCodeKey]===""){
                delete  data[itemCodeKey]
                delete  data[quantityKey]
                delete  data[itemDescriptionKey]
                delete  data[itemRate]
            }
        }
         data['amount'] = totalAmount;
         return data;
}

export const checkArray =(data)=>{
    if(Array.isArray(data)&& data?.length>0){
        return true;
    }else{
        return false;
    }
}

export const checkVariable = (data)=>{
    // console.log(data?.length,"___ahsbjckadsd")
    if(data!==undefined && data?.length>0 ){
        return true
    }else{
        return false
    }
}

export const CheckTrueOrFalse = ( key)=>{

    if(key === "Yes"){
        return true
    }else{
        return false
    }
}

export const checkTrueOrFalseDynamic =(key,value)=>{

    if(key === value){
        return true;
    }else{
        return false;
    }
}
