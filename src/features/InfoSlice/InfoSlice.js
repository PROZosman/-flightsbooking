import { createSlice } from '@reduxjs/toolkit'

export const InfoSlice = createSlice({

    name: 'addInformation',

    initialState: {
        submit: [],
    },


    reducers: {

        addUser: (state, action) => {
            state.submit.push(action.payload);
        },

        removeUser: (state, action) => {
            state.submit.pop(action.payload);
        },

    },
})


export const { addUser, removeUser } = InfoSlice.actions;

export default InfoSlice.reducer;
