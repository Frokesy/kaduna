import Header from '../defaults/Header';
import { motion } from 'framer-motion';

const DefaultHero = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="relative min-h-[50vh] overflow-hidden">
      <div className="absolute inset-0 w-full lg:h-[50vh] z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>

      <div className="relative lg:absolute lg:inset-0 bg-black/40 text-white z-10 w-full h-[50vh] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header />
        </motion.div>

        <div className="w-[90vw] mx-auto lg:mt-[10vh] mt-[15vh] z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lg:text-[128px] text-[50px] font-semibold uppercase text-center lg:w-[65%] mx-auto">
              {title}
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DefaultHero;
