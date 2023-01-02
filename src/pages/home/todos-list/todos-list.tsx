import { useTodosStore } from '../../../hooks/useTodosStore';
import TodoItem from '../todo-item/todo-item';

import { BiTask } from 'react-icons/bi';
import { FaRegSmileBeam, FaSearch } from 'react-icons/fa';
import { RiFocus2Line } from 'react-icons/ri';

const TodosList = () => {
  const { todos, filters } = useTodosStore(state => ({ ...state }));
  const todosFiltered = todos.filter(todo => {
    let isStatus = true;

    switch (filters.status) {
      case 'todo':
        isStatus = todo.doneOn === undefined;
        break;
      case 'done':
        isStatus = todo.doneOn !== undefined;
        break;
      default:
        break;
    }

    if (filters.text != '')
      return (
        isStatus && todo.text.toLowerCase().includes(filters.text.toLowerCase())
      );

    return isStatus;
  });
  todosFiltered.sort((a, b) => {
    return filters.date == 'ascending'
      ? a.addedOn - b.addedOn
      : b.addedOn - a.addedOn;
  });
  const isEmpty = todosFiltered.length === 0;

  return (
    <>
      {isEmpty && filters.text != '' && (
        <div className="h-[80%] flex flex-row items-center justify-center gap-3">
          <h2>No to-do found with these filters</h2>
          <FaSearch />
        </div>
      )}
      {isEmpty && filters.text == '' && filters.status == 'todo' && (
        <div className="h-[80%] flex flex-row items-center justify-center gap-3">
          <h2>No to-do found, well done !</h2>
          <FaRegSmileBeam />
        </div>
      )}
      {isEmpty && filters.text == '' && filters.status == 'done' && (
        <div className="h-[80%] flex flex-row items-center justify-center gap-3">
          <h2>Nothing finished yet, keep going !</h2>
          <RiFocus2Line />
        </div>
      )}
      {isEmpty && filters.text == '' && filters.status == 'all' && (
        <div className="h-[80%] flex flex-row items-center justify-center gap-3">
          <h2>Nothing found ! Let's add some to-do !</h2>
          <BiTask />
        </div>
      )}
      {isEmpty || (
        <ul className="px-2 pb-2 overflow-auto max-h-[100%]">
          {todosFiltered.map(todo => (
            <li key={todo.id}>
              <TodoItem {...todo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodosList;
