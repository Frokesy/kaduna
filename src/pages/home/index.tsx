import About from '../../components/home/About';
import Blog from '../../components/home/Blog';
import Courses from '../../components/home/Courses';
import Donate from '../../components/home/Donate';
import Hero from '../../components/home/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Donate />
      <Courses />
      <Blog />
    </div>
  );
};

export default Home;
