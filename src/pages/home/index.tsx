import Footer from '../../components/defaults/Footer';
import About from '../../components/home/About';
import Blog from '../../components/home/Blog';
import Courses from '../../components/home/Courses';
import Donate from '../../components/home/Donate';
import Hero from '../../components/home/Hero';
import Newsletter from '../../components/home/Newsletter';
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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
