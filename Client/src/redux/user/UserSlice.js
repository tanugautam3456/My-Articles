import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    currentUser : null,
    error:null,
    loading:false,
}

const  userSlice= createSlice({
    name:"user",
    initialState ,
    reducers:{
        signInStart:(state)=>{
            state.error=null
            state.loading=true;
        },

        signInSuccess: (state, action) =>{
            state.currentUser=action.payload;
            state.error=null
            state.loading=false;
        },

        signInFailure:(state, action)=> {
            state.loading=false;
            state.error=action.payload;
        },
        updateStart:(state)=>{
            state.loading = true;
            state.error = null;
          },
          updateSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
          },
          updateFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
    },
});
export const {signInFailure,signInStart,signInSuccess, updateStart,updateSuccess,updateFailure }=userSlice.actions
export default userSlice.reducer;

