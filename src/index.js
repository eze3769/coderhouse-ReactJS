import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import './styles/main.css';


    M.AutoInit()

ReactDOM.render(<App/>, document.getElementById("root"));