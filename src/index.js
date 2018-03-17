import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const initializeState = {
	tasks: []
};

const addTask = (task) =>({
	type: 'ADD_TASK',
	payload: {
		task
	}
});

function tasksReducer(state = initializeState, action) {
	switch (action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: state.tasks.concat([action.task])
			};
		default:
			return state;
	}
}

const store = createStore(tasksReducer);
