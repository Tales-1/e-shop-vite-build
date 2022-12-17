import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";


type State = {
    user:object[] | undefined | null
}

const initialState:State = {
    user:undefined,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        storeUser:(state,action) => {
            state.user = action.payload
        },
        removeUser:(state) => {
            state.user = null
        }
    }

})

export const { storeUser,removeUser } = userSlice.actions

export const selectUser = (state:RootState) => state.user.user

export default userSlice.reducer