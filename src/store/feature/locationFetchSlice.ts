import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchPickupLocation: null,
    fetchDropLocation: null,
};

const locationFetchSlice = createSlice({
    name: "locationFetch",
    initialState,
    reducers: {
        setPickupLocation: (state, action) => {
            state.fetchPickupLocation = action.payload;
        },
        setDropLocation: (state, action) => {
            state. fetchDropLocation = action.payload;
        },
        resetLocations: (state) => {
            state.fetchPickupLocation = null;
            state.fetchDropLocation = null;
        }
    },
});

export const { setPickupLocation, setDropLocation, resetLocations } = locationFetchSlice.actions;

export default locationFetchSlice.reducer;
