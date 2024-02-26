import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //reducer function hmesha do cheeje lete h input me
        add:(state,action) => {
            //jo bhi input send kiya h function me usko access hum action.payload se krte h in reducer function
            state.push(action.payload);
        },
        remove:(state,action) => {
            //state ke andr vohi wale item retail krna hai jo acion payload me input me ayi h vo na ho uske alawa sab ho
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;