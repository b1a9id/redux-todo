import React from 'react';
import { render } from 'react-dom';
import taskReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';

const store = createStore(taskReducer);

function renderApp(store) {
	render(
		<TodoApp store={store} />,
		document.getElementById('root')
	);
}
