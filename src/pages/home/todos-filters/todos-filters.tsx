import { ChangeEvent, MouseEvent, useState } from 'react';
import { useTodosStore } from '../../../hooks/useTodosStore';

import { ImFilter } from 'react-icons/im';

const TodosFilters = () => {
  const { filters, updateFilters } = useTodosStore(state => ({
    filters: state.filters,
    updateFilters: state.updateFilters
  }));
  const [open, setOpen] = useState(false);
  const isActive = (id: string) => (id == filters.status ? 'bg-secondary' : '');

  const clickOpenHandler = () => {
    setOpen(prev => !prev);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateFilters({ ...filters, text: e.target.value });
  };

  const clickStatusHandler = (e: MouseEvent<HTMLButtonElement>) => {
    updateFilters({
      ...filters,
      status: e.currentTarget.id as 'all' | 'todo' | 'done'
    });
  };

  return (
    <>
      <button
        onClick={clickOpenHandler}
        className="w-max mx-auto mb-2 pt-1 px-2 flex flex-row items-center justify-center gap-2 bg-secondary rounded-xl">
        <span>Filters</span>
        <ImFilter />
      </button>
      {open && (
        <div className="animate-opacity">
          <div className="mt-2 mb-4 flex flex-col gap-2 text-left">
            <label>Find by text</label>
            <input
              type="text"
              onChange={changeHandler}
              className="p-2 rounded-md outline-secondary"
              placeholder="Order pizzas 😋"
              defaultValue={filters.text}
            />
          </div>
          <div className="my-2 flex flex-row items-center gap-2">
            <button
              id="all"
              onClick={clickStatusHandler}
              className={`flex-auto p-1 border border-secondary rounded-md ${isActive(
                'all'
              )}`}>
              all
            </button>
            <button
              id="todo"
              onClick={clickStatusHandler}
              className={`flex-auto p-1 border border-secondary rounded-md ${isActive(
                'todo'
              )}`}>
              todo
            </button>
            <button
              id="done"
              onClick={clickStatusHandler}
              className={`flex-auto p-1 border border-secondary rounded-md ${isActive(
                'done'
              )}`}>
              done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodosFilters;
