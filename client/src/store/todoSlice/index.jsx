import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [],
        text: "Salom djfjsgfkjdsgjgsfgsdjsf"
    },
    reducers: {
        addToDo: (state, action) => {
            state.list.push(action.payload); // ✅ Yangi todo qo‘shish
        }
    }
});

export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer;
