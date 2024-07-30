import { createSlice } from "@reduxjs/toolkit";

// export const changeFilter = createAction('filters/changeFilter');

// export const filtersReducer = (state = {name: ""}, action) => {
//     switch (action.type) {
//         case changeFilter.type:
//             return  {name: action.payload}  ;
//         default:
//             return state;
//     }
// }

const slice = createSlice({
    name: 'filters',
    initialState: { name: "" },
    reducers: {
        changeFilter(state, action) {state.name = action.payload}
    }
})

export default slice.reducer;

export const { changeFilter } = slice.actions;

export const selectNameFilter = (state) => state.filters.name;