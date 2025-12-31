import { useEffect, useState } from 'react';
import Header from '../defaults/Header';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const slides = [
  {
    image: '/assets/hero-imgs/hero.png',
    title: 'Interfaith Education for peace, reconciliation and development',
    description:
      'Investing in an understanding between Muslims and Christians. Join us now to achieve the dream of positive interpersonal relations and donate to our cause.',
  },
  {
    image: '/assets/hero-imgs/img-two.png',
    title: 'Building bridges through dialogue and mutual respect',
    description:
      'We foster understanding that strengthens communities and promotes peaceful coexistence.',
  },
  {
    image: '/assets/hero-imgs/img-three.png',
    title: 'Empowering communities for sustainable peace',
    description:
      'Education and collaboration are at the heart of long-lasting development.',
  },
];

const imageVariants: Variants = {
  initial: { x: '100%', scale: 2, opacity: 1 },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative lg:min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full lg:h-screen z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${slides[prevImage].image})` }}
        />
        <motion.div
          key={currentImage}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02, rotateY: 3 }}
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url(${slides[currentImage].image})` }}
        />
      </div>

      <div className="relative lg:absolute lg:inset-0 bg-black/40 text-white z-10 w-full lg:h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header />
        </motion.div>

        <div className="w-[90vw] mx-auto lg:mb-0 mb-[20vh] mt-[20vh] z-20">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lg:text-[60px] text-[30px] font-semibold text-center lg:w-[65%] mx-auto">
              {slides[currentImage].title}
            </h2>
            <p className="lg:w-[60%] lg:text-[20px] text-center mx-auto mt-3">
              {slides[currentImage].description}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-auto mb-10 space-x-3 items-center">
          {slides.map((_, index) => {
            const isActive = currentImage === index;
            return (
              <div
                key={index}
                className={`relative h-2 w-24 rounded-full border ${
                  isActive ? 'border-[#2F6646]' : 'border-[#D0D5DD]'
                } overflow-hidden`}
              >
                {isActive && (
                  <motion.div
                    key={currentImage}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    className="absolute left-0 top-0 h-full bg-[#2F6646]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
