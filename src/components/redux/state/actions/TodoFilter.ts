import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const todoFilterActions = {
    filterSwitch: actionCreator<boolean>('TODO_FILTER_SWITCH'),
    filterModeSwitch: actionCreator<boolean>('TODO_FILTER_MODE_SWITCH'),
}

export default todoFilterActions;