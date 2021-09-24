import DISPLAY_CALCUL from "./type";
const defaultState={number:""};
const displayReducer = (state=defaultState,action) => {
    switch (action.type) {
        case DISPLAY_CALCUL:
            return {};
    
        default:
            return state;
    }
}
export default displayReducer;