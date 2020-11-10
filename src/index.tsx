import React from 'react';
import { RecoilRoot } from 'recoil';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from './components/menubar';

ReactDOM.render(
  <Router>
    <MenuBar />
  </Router>,
  document.getElementById('root')
);
