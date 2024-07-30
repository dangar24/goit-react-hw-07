import { createSlice, createSelector } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: buider => {
        buider
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export default slice.reducer;


export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()));
    });

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;