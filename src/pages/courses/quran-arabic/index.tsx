import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../../components/defaults/Header';
import {
  CaretDownIcon,
  ClockIcon,
  ModuleIcon,
} from '../../../components/Icons';
import Newsletter from '../../../components/home/Newsletter';
import Footer from '../../../components/defaults/Footer';

const QuranArabic = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const outlineItems = [
    { id: 1, outline: 'Learning the letters (28)', content: '' },
    { id: 2, outline: 'Learn how to pronounce the 28 letters', content: '' },
    { id: 3, outline: 'Learn how to connect before the letters', content: '' },
    {
      id: 4,
      outline: 'Learn how to form words through using letters',
      content: '',
    },
    { id: 5, outline: 'Conversations', content: '' },
    { id: 6, outline: 'Numbers', content: '' },
    {
      id: 7,
      outline: "Learning some short verses from the Qur'an",
      content: '',
    },
  ];

  return (
    <div>
      <Header color="black" />

      <div className="bg-[#F9FAFB]">
        <div className="pt-10 lg:pb-20 pb-10 lg:w-[80vw] w-[90vw] mx-auto">
          <h2 className="lg:text-[128px] text-[48px] lg:mb-0 mb-10 font-semibold text-center">
            Quran Arabic
          </h2>
          <img
            src="/assets/course-imgs/img-five.jpg"
            alt="hero"
            className="w-full lg:h-150 h-48 object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="lg:mt-10 w-[90vw] mx-auto">
        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-6 justify-between lg:space-x-10 lg:mt-[15vh] mt-10">
          <div className="lg:w-[40%]">
            <h2 className="lg:text-[36px] text-[30px] font-semibold">
              Quran Arabic
            </h2>
            <p className="text-[16px] mt-4">
              This course is designed to help students develop a strong
              foundation in Quranic Arabic.
            </p>
          </div>

          <div className="bg-[#F9FAFB] border border-[#D0D5DD] p-6 rounded-2xl lg:w-[50%] flex lg:flex-row flex-col lg:justify-between items-center lg:space-x-6">
            <div className="flex space-x-6 justify-between lg:mb-0 mb-6 lg:w-[60%] w-full">
              <div className="flex flex-col items-center">
                <ModuleIcon />
                <h3 className="font-semibold mt-2">Course Modules</h3>
                <span className="text-sm">12-module course</span>
              </div>

              <div className="flex flex-col items-center">
                <ClockIcon />
                <h3 className="font-semibold mt-2">Duration</h3>
                <span className="text-sm">12 weeks</span>
              </div>
            </div>

            <button className="bg-[#2B5D40] text-white py-3 px-6 rounded-lg font-semibold">
              Enroll now
            </button>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-[28px] font-semibold">Course Outline</h2>

          <div className="mt-10 space-y-6">
            {outlineItems.map((item) => {
              const isActive = activeIndex === item.id;

              return (
                <div key={item.id}>
                  <motion.div
                    onClick={() => setActiveIndex(isActive ? null : item.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer flex justify-between items-center p-4 rounded-xl transition-colors ${
                      isActive ? 'bg-[#F0F7F3]' : 'bg-transparent'
                    }`}
                  >
                    <div className="flex space-x-4">
                      <span className="text-[#2B5D40] font-semibold text-[40px]">
                        0{item.id}
                      </span>
                      <h3 className="text-[20px] mt-2 text-[#101B28]">
                        {item.outline}
                      </h3>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isActive ? 180 : 0,
                        backgroundColor: isActive ? '#2B5D40' : 'transparent',
                      }}
                      transition={{ duration: 0.25 }}
                      className="p-2 rounded-full"
                    >
                      <CaretDownIcon color={isActive ? 'white' : 'black'} />
                    </motion.div>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: 'easeInOut',
                        }}
                        className="overflow-hidden lg:pl-20 pl-10"
                      >
                        <motion.div
                          initial={{ y: -6 }}
                          animate={{ y: 0 }}
                          exit={{ y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="py-6 text-[#344054]"
                        ></motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default QuranArabic;
