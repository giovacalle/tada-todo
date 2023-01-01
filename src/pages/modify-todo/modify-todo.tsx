import { useMatch } from '@tanstack/react-location';
import TodoForm from '../../components/todo-form';

const ModifyTodo = () => {
  const {
    params: { todoId }
  } = useMatch();

  return <TodoForm id={todoId} />;
};

export default ModifyTodo;
