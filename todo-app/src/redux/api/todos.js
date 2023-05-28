// api/todos.js
const todos = [
    { id: 1, text: 'Todo 1', completed: false },
    { id: 2, text: 'Todo 2', completed: true },
    { id: 3, text: 'Todo 3', completed: false },
  ];
  
  export const fetchTodos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(todos);
      }, 1000);
    });
  };
  
  export const createTodo = (todo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo = { ...todo, id: Date.now() };
        todos.push(newTodo);
        resolve(newTodo);
      }, 500);
    });
  };
  
  export const updateTodo = (todo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = todos.findIndex((t) => t.id === todo.id);
        if (index !== -1) {
          todos[index] = { ...todo };
        }
        resolve(todo);
      }, 500);
    });
  };
  
  export const deleteTodo = (todoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = todos.findIndex((t) => t.id === todoId);
        if (index !== -1) {
          todos.splice(index, 1);
        }
        resolve(todoId);
      }, 500);
    });
  };
  