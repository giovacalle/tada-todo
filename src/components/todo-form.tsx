import { useTodosStore } from '../hooks/useTodosStore';
import { useRef, useState } from 'react';
import { Todo } from '../types/todo';
import TitledAlert from './ui/alerts/titled-alert';
import { TitledAlertProps } from '../types/alert';
import { useNavigate } from '@tanstack/react-location';

const TodoForm = ({ id = '' }: { id?: string }) => {
  const {
    todos,
    add: addTodo,
    delete: deleteTodo,
    update: updateTodo
  } = useTodosStore(state => ({ ...state }));
  const todo: Todo | undefined = todos.find(items => items.id == id);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [alert, setAlert] = useState<TitledAlertProps | undefined>();
  const [prompt, setPrompt] = useState<TitledAlertProps | undefined>();
  const navigate = useNavigate();

  const saveHandler = () => {
    try {
      const text = textRef.current?.value.trim() ?? '';

      if (text == '') throw new Error('Please provide a valid text !');

      if (todo) {
        updateTodo({ ...todo, text });
      } else {
        addTodo({
          id: crypto.randomUUID(),
          text,
          addedOn: new Date().getTime()
        });
      }
      // todo: react-query
      navigate({ to: '/', replace: true });
    } catch (error) {
      setAlert({
        title: 'Error',
        text: (error as Error).message,
        type: 'error'
      });
    }
  };

  const deleteHandler = () => {
    setPrompt({
      title: 'Attention !',
      text: (
        <span>
          Are you sure deleting this to-do ?<br></br>
          This action is <b>not reversible !</b>'
        </span>
      ),
      type: 'warning'
    });
  };

  const confirmDeleteHandler = () => {
    try {
      deleteTodo(id);
      // todo: react-query
      navigate({ to: '/', replace: true });
    } catch (error) {
      setPrompt(undefined);
      setAlert({
        title: 'Error',
        text: (error as Error).message,
        type: 'error'
      });
    }
  };

  return (
    <>
      {alert && (
        <TitledAlert
          title={alert.title}
          text={alert.text}
          type={alert.type}
          onClose={() => setAlert(undefined)}
        />
      )}
      {prompt && (
        <TitledAlert
          title={prompt.title}
          text={prompt.text}
          type={prompt.type}
          onClose={() => setPrompt(undefined)}>
          <>
            <button
              className="p-1 bg-red-500 text-white rounded-md"
              onClick={confirmDeleteHandler}>
              delete
            </button>
          </>
        </TitledAlert>
      )}
      <form
        onSubmit={e => e.preventDefault()}
        className="h-[90%] flex flex-col gap-4 mt-3">
        <h1 className="text-xl">{id ? 'Modify' : 'Add new'} to-do 🤓</h1>
        <textarea
          ref={textRef}
          className="h-[80%] p-2 resize-none rounded-md outline-secondary"
          placeholder="order pizzas 😋"
          defaultValue={todo?.text}></textarea>
        <button
          type="button"
          className="text-black bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-secondary-700 shadow-lg shadow-secondary/50 dark:shadow-lg font-medium rounded-lg text-3xl"
          onClick={saveHandler}>
          Save
        </button>
        {todo && (
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-3xl"
            onClick={deleteHandler}>
            Delete
          </button>
        )}
      </form>
    </>
  );
};

export default TodoForm;
