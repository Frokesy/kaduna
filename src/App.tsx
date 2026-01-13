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
import Gallery from './pages/media/gallery';
import QuranArabic from './pages/courses/quran-arabic';
import IslamicHistory from './pages/courses/islamic-history';
import IslamicTheology from './pages/courses/islamic-theology';
import ChristianMuslimRelations from './pages/courses/christian-muslim-relations';
import IntroToIslam from './pages/courses/intro-to-islam';
import PostOne from './pages/blog/post-one';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/about/b.o.t', element: <BoardOfTrustees /> },
    { path: '/about/staff', element: <Staff /> },
    { path: '/contact', element: <Contact /> },
    { path: '/media/videos', element: <Videos /> },
    { path: '/media/news', element: <News /> },
    { path: '/media/gallery', element: <Gallery /> },
    { path: '/programmes', element: <Programmes /> },
    { path: '/blog', element: <Blog /> },

    // courses
    { path: '/courses/quran-arabic', element: <QuranArabic /> },
    { path: '/courses/islamic-history', element: <IslamicHistory /> },
    { path: '/courses/islamic-theology', element: <IslamicTheology /> },
    {
      path: '/courses/christian-muslim-relations',
      element: <ChristianMuslimRelations />,
    },
    {
      path: '/courses/introduction-to-islam',
      element: <IntroToIslam />,
    },

    // blog posts
    { path: '/blog/1', element: <PostOne /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
