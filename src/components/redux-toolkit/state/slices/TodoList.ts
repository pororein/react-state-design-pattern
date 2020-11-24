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
            let copyTodoList = state.slice();
            let targetTodoItemIndex = 
                copyTodoList.findIndex(todoItem => todoItem.id == action.payload.id);
            copyTodoList[targetTodoItemIndex].compleated = true;
            return Object.assign([], state, copyTodoList );
        },
        cancell: (state, action: PayloadAction<{id: number}>) => {
            let copyTodoList = state.slice();
            let targetTodoItemIndex = 
                copyTodoList.findIndex(todoItem => todoItem.id == action.payload.id);
            copyTodoList[targetTodoItemIndex].compleated = false;
            return Object.assign([], state, copyTodoList);
        },
        updateTitle:  (state, action: PayloadAction<{id: number, title: string}>) => {
            let copyTodoList = state.slice();
            let targetTodoItemIndex = 
                copyTodoList.findIndex(todoItem => todoItem.id == action.payload.id);
            copyTodoList[targetTodoItemIndex].title = action.payload.title;
            return Object.assign([], state, copyTodoList);
        },
        delete: (state, action: PayloadAction<{id: number}>) => {
            let copyTodoList = state.slice();
            let targetTodoItemIndex = 
                copyTodoList.findIndex(todoItem => todoItem.id == action.payload.id);
            copyTodoList.splice(targetTodoItemIndex, 1);
        },
        add: (state) => {
            let nextId = state.length;
            let copyTodoList = state.slice();
            if(copyTodoList.length > 1) {
                copyTodoList.sort((item1, item2) => {
                    if( item1.id < item2.id ) return -1;
                    if( item1.id > item2.id ) return 1;
                    return 0;
                });
                nextId = copyTodoList[copyTodoList.length - 1].id + 1;
            }
            let newTodoItem: TodoItem = {
                id: nextId,
                title: '',
                compleated: false,
            }

            copyTodoList.push(newTodoItem);

            return Object.assign([], state, copyTodoList);
        },
    }
});

export default todoListSlice;
