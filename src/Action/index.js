export const setprod_num = (value)=> async dispatch =>{
    dispatch({
        type:"SETPRODNUMBER",
        payload:value
    })
} 

export const resetproductnumber = ()=>async dispatch =>{
    dispatch ({
        type:"RESETPRODUCTNUMBER"
    })
}

export const setfilter = (value) => async dispatch =>{
    dispatch( {
        type: "SETFILTER",
        payload:value
    })
}

export const resetfilter = () => async dispatch =>{
    dispatch({
        type: "RESETFILTER"
    })
}

export const addorder = (id,title,prod_num,price,image ) => async dispatch =>{
    dispatch({
        type:"ADDORDER",
        payload:{
            id:id,
            title:title,
            price:price,
            prod_num : prod_num,
            image:image
        }
    })
}