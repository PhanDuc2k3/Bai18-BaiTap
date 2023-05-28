// actions.js
import axios from 'axios';

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: 'UPDATE_TODO',
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.example.com/todos');
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_TODOS_ERROR',
        payload: error.message,
      });
    }
  };
};
