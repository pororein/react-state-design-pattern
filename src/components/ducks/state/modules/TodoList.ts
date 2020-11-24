import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';

export interface TodoItem {
    id: number
    title: string
    compleated: boolean
}

const actionCreator = actionCreatorFactory();

export const todoListActions = {
    done: actionCreator<{id: number}>('TODO_ITEM_DONE'),
    cancell: actionCreator<{id: number}>('TODO_ITEM_CANCELL'),
    updateTitle: actionCreator<{id: number, title: string}>('TODO_TITLE_UPDATE'),
    delete: actionCreator<{id: number}>('TODO_ITEM_DELETE'),
    add: actionCreator<void>('TODO_ITEM_ADD'),
}

const initialState: TodoItem[] = [];

const todoListReducer = reducerWithInitialState(initialState)
    .case(todoListActions.done, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList[targetTodoItemIndex].compleated = true;
        return Object.assign([], state, copyTodoList );
    })
    .case(todoListActions.cancell, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList[targetTodoItemIndex].compleated = false;
        return Object.assign([], state, copyTodoList);
    })
    .case(todoListActions.updateTitle, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList[targetTodoItemIndex].title = payload.title;
        return Object.assign([], state, copyTodoList);
    })
    .case(todoListActions.delete, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList.splice(targetTodoItemIndex, 1);
        return copyTodoList;
    })
    .case(todoListActions.add, (state) => {
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
    })

export default todoListReducer;
