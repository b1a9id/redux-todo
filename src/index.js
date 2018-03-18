import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import taskReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

const store = createStore(taskReducer);

render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('root')
);
