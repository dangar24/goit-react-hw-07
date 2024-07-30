import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'contacts',
    initialState: { items: [] },
    reducers: {
        addContact(state, action) {state.items.push(action.payload);},
        deleteContact(state, action) {state.items = state.items.filter((contact) => contact.id !== action.payload);},
    }
})

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = (state) => state.contacts.items;