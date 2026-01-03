import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { mediaDropdown } from '../data/DropdownData';

const MediaDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="lg:absolute text-gray-800 bg-[#ffffff] z-50 lg:rounded-xl lg:shadow-lg flex flex-col p-2 space-y-2 lg:w-[20vw] w-full lg:top-10"
    >
      {mediaDropdown.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className="hover:bg-gray-200 hover:rounded-xl p-3 flex items-center space-x-3 transition-all duration-300 ease-in-out lg:border-none border-b-2 border-[#cccccc]"
        >
          {/* <div className="scale-50">{item.icon}</div> */}
          <div className="">
            <h2 className="text-[15px] capitalize font-semibold">
              {item.title}
            </h2>
            <p className="lowercase text-[13px] mt-2">{item.excerpt}</p>
          </div>
        </NavLink>
      ))}
    </motion.div>
  );
};

export default MediaDropdown;
