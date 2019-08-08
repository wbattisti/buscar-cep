import {
    INITIALIZE,
    CEP_REQUEST,    
    DISPLAYCEP,
} from "../actions/CepAction";

let localState = {
    load:false,
    show:false,
    data:{},
};

const CepReducer = (state = [],action) => {

    switch (action.type) {
        case INITIALIZE:
            localState = {...state};        
            localState.load = false;
            localState.show = false;

            return localState

        case CEP_REQUEST:
            localState = {...state};        
            localState.load = true;
            localState.show = false;

            return localState;

        case DISPLAYCEP:
            localState = {...state};        
            localState.load = false;
            localState.show = true;
            localState.data = action.dadosCep;
                
            return localState;
        
        default:            
            return state;

    }

}
export default CepReducer;
