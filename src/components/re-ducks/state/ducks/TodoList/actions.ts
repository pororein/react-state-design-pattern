import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const todoListActions = {
    done: actionCreator<{id: number}>('TODO_ITEM_DONE'),
    cancell: actionCreator<{id: number}>('TODO_ITEM_CANCELL'),
    updateTitle: actionCreator<{id: number, title: string}>('TODO_TITLE_UPDATE'),
    delete: actionCreator<{id: number}>('TODO_ITEM_DELETE'),
    add: actionCreator<void>('TODO_ITEM_ADD'),
}

export default todoListActions;