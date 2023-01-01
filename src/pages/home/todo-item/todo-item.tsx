import { useNavigate } from '@tanstack/react-location';
import { ChangeEvent } from 'react';
import { useTodosStore } from '../../../hooks/useTodosStore';
import { Todo } from '../../../types/todo';

const TodoItem = ({ id, text, addedOn, doneOn }: Todo) => {
  const { todos, update: updateTodo } = useTodosStore(state => ({ ...state }));
  const todo = todos.find(item => item.id == id) ?? {
    id,
    text,
    addedOn,
    doneOn
  };
  const navigate = useNavigate();
  const addedOnFormatted = new Date(todo.addedOn);
  const doneOnFormatted = todo.doneOn && new Date(todo.doneOn);

  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      updateTodo({
        id,
        text,
        addedOn,
        doneOn: e.target.checked ? new Date().getTime() : undefined
      });
      // todo react-query
    } catch (error) {}
  };

  const clickHandler = () => {
    navigate({ to: `${todo.id}`, replace: true });
  };

  return (
    <div className="mt-2 flex flex-row items-center gap-3 p-3 text-left bg-white rounded-md shadow-lg">
      <div className="status">
        <input
          type="checkbox"
          className="appearance-none h-6 w-6 flex items-baseline justify-center rounded-xl border border-slate-400 text-white bg-white checked:bg-quaternary cursor-pointer mark-checked"
          onChange={changeStatusHandler}
          checked={doneOnFormatted != undefined}
        />
      </div>
      <div
        onClick={clickHandler}
        className="flex-1 flex flex-col gap-3 cursor-pointer">
        <div className={doneOnFormatted ? 'line-through' : ''}>{todo.text}</div>
        <div className="flex flex-col">
          <small className="text-slate-700">
            added on {addedOnFormatted.toLocaleString()}
          </small>
          {doneOnFormatted && (
            <small className="text-slate-700">
              completed on {doneOnFormatted.toLocaleString()}
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
