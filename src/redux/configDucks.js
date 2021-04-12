//constant
const initialData = { 
    spinner: false, 
    promiseCount: 0, 
    history: null, 
    logOut: null, 
    beforeUnload: null, 
}


// types
const CONFIG_SET_SPINNER = 'CONFIG_SET_SPINNER';
// const CONFIG_SET_HISTORY_REFERENCE = 'CONFIG_SET_HISTORY_REFERENCE';
// const CONFIG_SET_LOG_OUT_REFERENCE = 'CONFIG_SET_LOG_OUT_REFERENCE';
// const CONFIG_SET_BEFORE_UNLOAD_REFERENCE = 'CONFIG_SET_BEFORE_UNLOAD_REFERENCE';
// const CONFIG_CLEAN_REDUCER = 'CONFIG_CLEAN_REDUCER';




//Reducer
export default function ConfigReducer(state = initialData,action){
    switch (action.type) {
        case CONFIG_SET_SPINNER:
            const { promiseCount } = state;
            let count = 0;
            let enable = false;
            if (action.payload) {
                count = promiseCount + 1;
                enable = action.payload;
            } else {
                count = promiseCount - 1;
            }

            if (count === 0) {
                enable = action.payload;
            }

            return Object.assign({}, state, { spinner: enable, promiseCount: count });

        // case CONFIG_SET_HISTORY_REFERENCE:
        //     return Object.assign({}, state, { history: action.payload });
        // case CONFIG_SET_LOG_OUT_REFERENCE:
        //     return Object.assign({}, state, { logOut: action.payload });
        // case CONFIG_SET_BEFORE_UNLOAD_REFERENCE:
        //     return Object.assign({}, state, { beforeUnload: action.payload });
        // case CONFIG_CLEAN_REDUCER:
        //     return Object.assign({}, state, { spinner: false, promiseCount: 0, history: null, logOut: null, beforeUnload: null });
        default:
            return state;
    }
};


//Actions
export const enableSpinner = (param) => async (dispatch, getState)=>{
    try {
        dispatch({
            type: CONFIG_SET_SPINNER,
            payload: param,
        });
    } catch (error) {
        
    }
}







