export const pagination = { page: 1, limit: 50 };
export const range = { start: 1, end: 7 };



export const calculateCompletionCriteriaPaylaod =(itemCodeAllInputs,data)=>{
     let falseKey = false;
        for (let i = 0; i < itemCodeAllInputs.length/2; i++) {
            const itemCode = data[`itemCode0${i+1}`]?.trim();
            const quantityCode = data[`quantity0${i+1}`]?.trim();

            if (
                (itemCode && !quantityCode) ||
                (!itemCode && quantityCode)
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

            const itemCodeValueData = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[0]:""
            const itemCodeRateData = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[1]:""
            const itemCodeDescription = data[itemCodeKey]?.length>0?  data[itemCodeKey]?.split(",")[2]:""
            console.log(itemCodeValueData,itemCodeRateData,itemCodeDescription,"____itemCodeDescription")
            const itemRate=`itemRate0${i}`;
            data[itemRate] = itemCodeRateData;
            data[itemCodeKey]=itemCodeValueData;
            data[itemDescriptionKey] = itemCodeDescription
            const quantityValue = data[quantityKey];

            if (quantityValue && quantityValue.trim() !== "") {
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
                data[quantityKey] = numbericQuantity;
            }
        }
         data['amount'] = totalAmount;
         return data;
}

export const  quantitySelectTypeOptions =()=>{
    console.log("callingtime")
    const optionQuantityArray=[]
    for( let i=1;i<=11;i++){

        let quantityIndexOptions={}
        if(i<11){
            quantityIndexOptions={
            label:i,
            value:i
        }
        }else{
              quantityIndexOptions={
            label:"Custom Quantity",
            value:"customQuantity"
        }
        }
        optionQuantityArray.push(quantityIndexOptions);
    }
    console.log(optionQuantityArray,"___optionQuantityArray__")

    return optionQuantityArray
}