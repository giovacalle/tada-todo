import { ChangeEvent } from 'react';

const TodoItem = () => {
  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };

  return (
    <div className="mt-2 flex flex-row items-center gap-3 p-3 text-left bg-white rounded-md shadow-lg">
      <div className="status">
        <input
          type="checkbox"
          className="h-6 w-6 accent-quaternary"
          onChange={changeStatusHandler}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          doloremque vero suscipit, veniam quibusdam dolorum unde eum modi et
          quasi obcaecati, animi aperiam maxime iure voluptas nostrum illum
          voluptatibus saepe.
        </div>
        <small className="text-slate-700">
          date added (UTC or based on timezone)
        </small>
      </div>
    </div>
  );
};

export default TodoItem;
