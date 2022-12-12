import {
  createBrowserHistory,
  Outlet,
  ReactLocation,
  Router
} from '@tanstack/react-location';

import About from './pages/about/about';
import Home from './pages/home/home';
import NewTodo from './pages/new-todo/new-todo';
import Account from './pages/account/account';
import SignUp from './pages/account/sign-up/sign-up';
import ForgotPsw from './pages/account/forgot-psw/forgot-psw';
import TodoItem from './pages/todo-item/todo-item';

import { Header } from './components/header';
import { Footer } from './components/footer';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/new-todo', element: <NewTodo /> },
  {
    path: '/account',
    children: [
      {
        path: '/',
        element: <Account />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: 'forgot-psw',
        element: <ForgotPsw />
      }
    ]
  },
  { path: ':todoId', element: <TodoItem /> }
];
const history = createBrowserHistory();
const location = new ReactLocation({ history });

const Root = () => {
  return (
    <Router location={location} routes={routes}>
      <div className="h-screen max-w-lg sm:w-full mx-auto mt-0 flex flex-col items-center">
        <Header />
        <main className="w-full px-2 flex-1 overflow-auto text-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Root;
