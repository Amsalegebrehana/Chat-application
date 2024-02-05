import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login'
import Chat from './pages/Chat'
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';

function App() {

  const router = createBrowserRouter(
    [
      { 
        path: '/', 
        element: <Login  />
      },
      { 
        path: '/signup', 
        element: <Signup  />
      },
      { 
        path: '/forgot_password', 
        element: <Forgotpassword />
      },
      {
        path: '/chat',
        element: <Chat />
      }
    ]
  );
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
