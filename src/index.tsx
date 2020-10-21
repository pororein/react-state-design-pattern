import React from 'react';
import { RecoilRoot } from 'recoil';
import * as ReactDOM from 'react-dom';
import TodoList from './components/TodoList';

ReactDOM.render(
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>,
  document.getElementById('root')
);
