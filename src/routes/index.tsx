import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import Counter from '../pages/Counter';
import Login from '../pages/Login';
import FavoriteList from '../pages/FavoriteList';
import BasicForm from '../pages/BasicForm';
import Post from '../pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/counter',
        element: <Counter />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/favorite-list',
        element: <FavoriteList />,
      },
      {
        path: '/basic-form',
        element: <BasicForm />,
      },
      {
        path: '/post',
        element: <Post />,
      },
    ],
  },
]);

export default router;
