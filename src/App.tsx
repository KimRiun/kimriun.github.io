import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATH } from './config/constants';
import MainPage from './pages/MainPage';
import './styles/fonts.css';

const router = createBrowserRouter([
  {
    path: PATH.root,
    element: <MainPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
