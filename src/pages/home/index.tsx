import About from '../../components/home/About';
import Blog from '../../components/home/Blog';
import Courses from '../../components/home/Courses';
import Donate from '../../components/home/Donate';
import Hero from '../../components/home/Hero';
import Partners from '../../components/home/Partners';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Donate />
      <Courses />
      <Blog />
      <Partners />
    </div>
  );
};

export default Home;
