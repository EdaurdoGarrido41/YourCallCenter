
//constant
const initialData ={
    array:[],
}


// types
const LOGIN_USER = 'LOGIN_USER';



//Reducer
export default function SessionReducer(state = initialData,action){
    switch (action.type) {
        case LOGIN_USER:
            return  {...state, array: action.payload};    
        default:
            return state;
    }
};


//Actions
export const LoginUser = ()=> async (dispatch, getState)=>{
    
    try {
        dispatch({
            type: LOGIN_USER,
            payload: ['David','Rocha'],
        });
    } catch (error) {
        
    }
}
