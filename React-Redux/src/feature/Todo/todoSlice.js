import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // Create a new todo with a unique id
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // Remove a todo by filtering out the one with the given id
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            // Destructure the id and text from action.payload
            const { id, text } = action.payload;

            // Find the todo by id
            const todo = state.todos.find((todo) => todo.id === id);

            // If the todo exists and text is valid, update the text
            if (todo && text.trim()) {
                todo.text = text;
            }
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
