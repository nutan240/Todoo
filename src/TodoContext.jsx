import { createContext, useContext } from 'react';

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export default TodoContext;