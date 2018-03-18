import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
// デフォルト設定を利用しない場合はcreateLoggerをインポートする
import { createLogger } from 'redux-logger';
import taskReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

// 高頻度で発生するActionをログに落とさないように例外として指定
const loggerSetting = {
	predicate: (getState, action) => action.type !== 'HIGH_FREQUENCY_ACTION'
};
// 設定を元にloggerミドルウェアを作成
const logger = createLogger(loggerSetting);
const store = createStore(taskReducer, applyMiddleware(logger));

render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('root')
);
