// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <div>Bai1</div>
    <Provider store={store}>
      <TodoList />
    </Provider>
    </div>
  );
};

export default App;
