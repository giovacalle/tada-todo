import React from 'react';

// todo: in props there will be a todo type and not just id

const TodoForm: React.FC<{ id?: number }> = ({ id }) => {
  return (
    <form className="h-[90%] flex flex-col gap-4 mt-3">
      <h1 className="text-xl">{id ? 'Modify' : 'Add new'} to-do 🤓</h1>
      <textarea
        className="h-[80%] p-2 resize-none rounded-md outline-secondary"
        placeholder="order pizzas 😋"></textarea>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-secondary-700 shadow-lg shadow-secondary/50 dark:shadow-lg font-medium rounded-lg text-3xl">
        {id ? 'Save' : 'Add'}
      </button>
      {id && (
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-3xl">
          Delete
        </button>
      )}
    </form>
  );
};

export default TodoForm;
