import TodosFilters from './todos-filters/todos-filters';
import TodosList from './todos-list/todos-list';

const Home = () => {
  return (
    <>
      <TodosFilters />
      <TodosList />
    </>
  );
};

export default Home;
