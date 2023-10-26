import { useState } from 'react';
import { Todos } from './Components/Todo';

const mockTodos = [
  {
    id: '1',
    title: 'Todo1',
    completed: false,
  },
  {
    id: '2',
    title: 'Todo2',
    completed: false,
  },
  {
    id: '2',
    title: 'Todo2',
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  return <Todos todos={todos} />;
};

export default App;
