// components/TodoList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, fetchTodos } from '../redux/actions';
import { createTodo } from '../redux/api/todos';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = async () => {
    const todo = { text: 'New Todo', completed: false };
    const newTodo = await createTodo(todo);
    dispatch(addTodo(newTodo));
  };

  const handleUpdateTodo = async (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    const newTodo = await updateTodo(updatedTodo);
    dispatch(updateTodo(newTodo));
  };

  const handleDeleteTodo = async (todoId) => {
    await deleteTodo(todoId);
    dispatch(deleteTodo(todoId));
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleUpdateTodo(todo)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
