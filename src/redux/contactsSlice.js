import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;

// export const addContact = createAction("contact/add");
// export const deleteContact = createAction("contact/delete");

// const initialState = {
//   contacts: {
//     items: [],
//   },
// };

// export default function contactsSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case "ontact/add":
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload],
//         },
//       };

//     case "contact/delete":
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(
//             (item) => item.id !== action.payload
//           ),
//         },
//       };
//     default:
//       return state;
//   }
// }
