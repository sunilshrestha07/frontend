import {createSlice } from '@reduxjs/toolkit'

const initialState={
    loading: false,
    error: null,
    currentUser: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        SignInstart:(state)=>{
            state.loading=true,
            state.error=null
        },
        SignInSuccess:(state,action)=>{
            state.currentUser=action.payload,
            state.loading=false,
            state.error=null
        },
        SignInFailure:(state,action)=>{
            state.error=action.payload,
            state.loading=false
        },
        updateSuccess:(state,action)=>{
            state.loading=false,
            state.currentUser=action.payload,
            state.error=null
        },
        deleteSuccess:(state,action)=>{
            state.loading = false,
            state.error = null,
            state.currentUser= null
        },
        logoutSuccess:(state,action)=>{
            state.loading= false,
            state.error = null,
            state.currentUser = null
        }
    }

})

export const {SignInFailure,SignInSuccess,SignInstart ,updateSuccess,deleteSuccess,logoutSuccess}=userSlice.actions
export default userSlice.reducer