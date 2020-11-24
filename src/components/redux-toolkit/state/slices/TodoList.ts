import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoItem {
    id: number
    title: string
    compleated: boolean
}

const initialState: TodoItem[] = [];

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {
        done: (state, action: PayloadAction<{id: number}>) => {
            let targetTodoItemIndex = 
                state.findIndex(todoItem => todoItem.id == action.payload.id);
            state[targetTodoItemIndex].compleated = true;
            return state;
        },
        cancell: (state, action: PayloadAction<{id: number}>) => {
            let targetTodoItemIndex = 
                state.findIndex(todoItem => todoItem.id == action.payload.id);
            state[targetTodoItemIndex].compleated = false;
            return state;
        },
        updateTitle:  (state, action: PayloadAction<{id: number, title: string}>) => {
            let targetTodoItemIndex = 
                state.findIndex(todoItem => todoItem.id == action.payload.id);
            state[targetTodoItemIndex].title = action.payload.title;
            return state;
        },
        delete: (state, action: PayloadAction<{id: number}>) => {
            let targetTodoItemIndex = 
                state.findIndex(todoItem => todoItem.id == action.payload.id);
            state.splice(targetTodoItemIndex, 1);
            return state;
        },
        add: (state) => {
            let nextId = state.length;
            if(state.length > 1) {
                state.sort((item1, item2) => {
                    if( item1.id < item2.id ) return -1;
                    if( item1.id > item2.id ) return 1;
                    return 0;
                });
                nextId = state[state.length - 1].id + 1;
            }
            let newTodoItem: TodoItem = {
                id: nextId,
                title: '',
                compleated: false,
            }

            state.push(newTodoItem);

            return state;
        },
    }
});

export default todoListSlice;
