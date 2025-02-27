import { configureStore } from "@reduxjs/toolkit"
// import { addToDo } from "./todoSlice/index";
import todoReducer from "./todoSlice"

const store = configureStore({
    reducer: { todo: todoReducer },
})

export default store;