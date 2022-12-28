import TodoForm from '../../components/todo-form';

const ModifyTodo = ({ id }: { id: number }) => {
  return <TodoForm id={id} />;
};

export default ModifyTodo;
