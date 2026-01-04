import { AnimatePresence } from 'framer-motion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import BoardOfTrustees from './pages/about/b.o.t';
import Staff from './pages/about/staff';
import Contact from './pages/contact';
import Videos from './pages/media/videos';
import Programmes from './pages/programmes';
import News from './pages/media/news';
import Blog from './pages/blog';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/about/b.o.t', element: <BoardOfTrustees /> },
    { path: '/about/staff', element: <Staff /> },
    { path: '/contact', element: <Contact /> },
    { path: '/media/videos', element: <Videos /> },
    { path: '/media/news', element: <News /> },
    { path: '/programmes', element: <Programmes /> },
    { path: '/blog', element: <Blog /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
