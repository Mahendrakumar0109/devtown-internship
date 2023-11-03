const initialState = {
    prod_num : null
}

export default function tablereducer(state = initialState, action){
    const {type, payload} = action;
    switch (type){
        case "SETPRODNUMBER":
            return{...state, prod_num:payload}
        case "RESETPODNUMBER":
            return {...state, prod_num:null}
        default:
            return state       
    }
}