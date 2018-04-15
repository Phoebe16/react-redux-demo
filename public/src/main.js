import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index.js';
import App from './containers/App.js';
import SelectArea from './components/select_area/select_area.jsx';

let store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <SelectArea province="广东省" city="广州市" district="海珠区" />
    </Provider>,
    document.getElementById('root')
);
