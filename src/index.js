import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Spinner from 'react-bootstrap/Spinner'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <div id="spinner-container" className="spinner-div">
        <Spinner animation="border" variant="primary" />
    </div>
    , document.getElementById('spinner'));

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();