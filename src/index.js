import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import Dogs from './containers/dogs'
import './index.css';

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="wrapper">
                <Dogs />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
)