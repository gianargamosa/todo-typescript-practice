import React, { useState } from 'react'

interface Props {
  addTodo: (text: any) => any;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}