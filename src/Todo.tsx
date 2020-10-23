import React from 'react'

interface ITodo {
  text: string;
  isCompleted?: boolean;
}

interface Props {
  todo: ITodo;
  index: number;
  completeTodo: (index: number) => number | void;
  removeTodo: (index: number) => void;
}

export const Todo: React.FC<Props> = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <input type="checkbox" onClick={() => completeTodo(index)}/>
      {todo.text}
      <a href="#" onClick={() => removeTodo(index)}>&times;</a>
    </div>
  )
}