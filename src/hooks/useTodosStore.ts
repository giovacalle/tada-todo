import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Todo } from '../types/todo';

interface TodosFilter {
  text: string;
  status: 'all' | 'todo' | 'done';
}

interface TodosState {
  todos: Todo[];
  filters: TodosFilter;
  add: (todo: Todo) => void;
  update: (todo: Todo) => void;
  delete: (id: string) => void;
  updateFilters: (filters: TodosFilter) => void;
}

export const useTodosStore = create<TodosState>()(
  devtools(
    persist(
      set => ({
        todos: [],
        filters: {
          text: '',
          status: 'all'
        },
        add: todo => set(state => ({ todos: [...state.todos, todo] })),
        delete: id =>
          set(state => ({ todos: state.todos.filter(todo => todo.id != id) })),
        update: todoToUpdate =>
          set(state => {
            const todos = state.todos;

            const idTodoFound = todos.findIndex(
              todo => todo.id == todoToUpdate.id
            );

            if (idTodoFound == -1) return { todos };

            todos[idTodoFound] = todoToUpdate;

            return { todos };
          }),
        updateFilters: newFilters =>
          set(state => ({ filters: { ...newFilters } }))
      }),
      {
        name: 'todos'
      }
    )
  )
);
