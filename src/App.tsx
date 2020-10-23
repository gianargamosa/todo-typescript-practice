import React, { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

interface ITodos {
  text: string;
  isCompleted?: boolean;
}

const TODOS = [
  { text: "Learn about React", isCompleted: false },
  { text: "Meet friend for lunch", isCompleted: false },
  { text: "Try to convert todo tutorial from digital ocean to typescript", isCompleted: false }
]

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<ITodos>>(TODOS)

  const addTodo = (text: any) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h4 className="todo-title">#Todo</h4>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
