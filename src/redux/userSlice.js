import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        name :   "",
        email : "",
        phone: "",
        Gnumber: "",
        guardian: "",
        password: "",
        degree: "",
        agent: "",
        nationality: "",
       
}
 export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers  : {
        loginRedux : (state,action)=>{
            console.log(action.payload.data)
            state.email= action.payload.data.email
            state.phone= action.payload.data.phone
            state.Gnumber= action.payload.data.Gnumber
            state.guardian= action.payload.data.guardian
            state.degree= action.payload.data.degree
            state.nationality= action.payload.data.nationality
            state.agent= action.payload.data.agent
            state.name= action.payload.data.name
        },
        logoutRedux : (state,action)=>{
            state.email= "";
            state.name= "";
           
        }
    }
})

export const {loginRedux,logoutRedux} = userSlice.actions
export default userSlice.reducer