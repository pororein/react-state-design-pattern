import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actions from '../actions/TodoList';

export interface TodoItem {
    id: number
    title: string
    compleated: boolean
}

const initialState: TodoItem[] = [];

/**
 * 全部手書きだと↓みたいな感じ
 * 
 * export default function reducer(state = initialState, action) {
 *     switch(action.type) {
 *         case 'TODO_TITLE_UPDATE': {
 *             ~~処理本体~~
 *             return Object.assign({}, state, todoList);
 *         }
 *         default:
 *             return state
 *     }
 * }
 */

const todoListReducer = reducerWithInitialState(initialState)
    .case(actions.done, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList[targetTodoItemIndex].compleated = true;
        return Object.assign([], state, copyTodoList );
    })
    .case(actions.cancell, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList[targetTodoItemIndex].compleated = false;
        return Object.assign([], state, copyTodoList);
    })
    .case(actions.updateTitle, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList[targetTodoItemIndex].title = payload.title;
        return Object.assign([], state, copyTodoList);
    })
    .case(actions.delete, (state, payload) => {
        let copyTodoList = state.slice();
        let targetTodoItemIndex = 
            copyTodoList.findIndex(todoItem => todoItem.id == payload.id);
        copyTodoList.splice(targetTodoItemIndex, 1);
        return copyTodoList;
    })
    .case(actions.add, (state) => {
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
