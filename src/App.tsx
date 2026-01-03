import { AnimatePresence } from 'framer-motion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import BoardOfTrustees from './pages/about/b.o.t';
import Staff from './pages/about/staff';
import Contact from './pages/contact';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/about/b.o.t', element: <BoardOfTrustees /> },
    { path: '/about/staff', element: <Staff /> },
    { path: '/contact', element: <Contact /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
