import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

/**
 * 全部手書きだと↓みたいな感じ
 * 
 * export function updateTitle(title: string) {
 *     return { 
 *         type: 'TODO_TITLE_UPDATE', 
 *         payload: title
 *     };
 * }
 */

const todoListActions = {
    done: actionCreator<{id: number}>('TODO_ITEM_DONE'),
    cancell: actionCreator<{id: number}>('TODO_ITEM_CANCELL'),
    updateTitle: actionCreator<{id: number, title: string}>('TODO_TITLE_UPDATE'),
    delete: actionCreator<{id: number}>('TODO_ITEM_DELETE'),
    add: actionCreator<null>('TODO_ITEM_ADD'),
}

export default todoListActions;