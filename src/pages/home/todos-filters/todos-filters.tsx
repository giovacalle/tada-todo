import { ChangeEvent, MouseEvent, useState } from 'react';
import { useTodosStore } from '../../../hooks/useTodosStore';

import { ImFilter } from 'react-icons/im';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { AiOutlineSortDescending } from 'react-icons/ai';

const TodosFilters = () => {
  const { filters, updateFilters } = useTodosStore(state => ({
    filters: state.filters,
    updateFilters: state.updateFilters
  }));
  const [open, setOpen] = useState(false);
  const isStatusActive = (id: string) =>
    id == filters.status ? 'bg-secondary' : '';
  const isDateActive = (value: string) =>
    value == filters.date ? 'bg-secondary' : 'opacity-70';

  const clickOpenHandler = () => {
    setOpen(prev => !prev);
  };

  const changeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateFilters({ ...filters, text: e.target.value });
  };

  const clickStatusHandler = (e: MouseEvent<HTMLButtonElement>) => {
    updateFilters({
      ...filters,
      status: e.currentTarget.id as 'all' | 'todo' | 'done'
    });
  };

  const changeDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateFilters({
      ...filters,
      date: e.currentTarget.value as 'ascending' | 'descending'
    });
  };

  return (
    <>
      <button
        onClick={clickOpenHandler}
        className="w-max mx-auto mb-1 pt-1 px-2 flex flex-row items-center justify-center gap-2 bg-secondary rounded-xl">
        <span>Filters</span>
        <ImFilter />
      </button>
      {open && (
        <div className="my-2 flex flex-col gap-5 animate-opacity">
          <div className="flex flex-col gap-2 text-left">
            <label>Find by text</label>
            <input
              type="text"
              onChange={changeTextHandler}
              className="p-2 rounded-md outline-secondary"
              placeholder="Order pizzas 😋"
              defaultValue={filters.text}
            />
          </div>
          <label className="text-start">Find by status</label>
          <div className="flex flex-row items-center gap-2">
            <button
              id="all"
              onClick={clickStatusHandler}
              className={`flex-auto p-1 border border-secondary rounded-md ${isStatusActive(
                'all'
              )}`}>
              all
            </button>
            <button
              id="todo"
              onClick={clickStatusHandler}
              className={`flex-auto p-1 border border-secondary rounded-md ${isStatusActive(
                'todo'
              )}`}>
              todo
            </button>
            <button
              id="done"
              onClick={clickStatusHandler}
              className={`flex-auto p-1 border border-secondary rounded-md ${isStatusActive(
                'done'
              )}`}>
              done
            </button>
          </div>
          <label className="text-start">Order by date</label>
          <ul className="flex flex-row items-center justify-center gap-2">
            <li
              className={`p-1 flex flex-row items-center gap-2 rounded-md ${isDateActive(
                'ascending'
              )}`}>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="date"
                  value="ascending"
                  onChange={changeDateHandler}
                  className="appearance-none"
                />
                <span>Ascending</span>
              </label>
              <AiOutlineSortAscending />
            </li>
            <li
              className={`p-1 flex flex-row items-center gap-2 rounded-md ${isDateActive(
                'descending'
              )}`}>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="date"
                  value="descending"
                  onChange={changeDateHandler}
                  className="appearance-none"
                />
                <span>Descending</span>
              </label>
              <AiOutlineSortDescending />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TodosFilters;
