import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Payout from './Payout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/payout",
      element: <Payout />
    },
  ])
  return (
    <Home />,
    <RouterProvider router={router} />
  );
}

export default App;
