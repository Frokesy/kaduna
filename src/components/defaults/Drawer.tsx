import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CaretDownIcon } from '../Icons';
import AboutDropdown from '../dropdowns/AboutDropdown';
import MediaDropdown from '../dropdowns/MediaDropdown';

const Drawer = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState<boolean>(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState<boolean>(false);

  return (
    <div className="text-gray-800 bg-[#ffffff] min-h-screen z-40 space-y-10 flex-col flex lg:hidden w-full py-20 top-0 fixed px-4 mx-auto">
      <NavLink to="/">Home</NavLink>
      <div className="">
        <div
          onClick={() => setShowAboutDropdown((prev) => !prev)}
          className="space-x-3 flex items-center justify-between cursor-pointer"
        >
          <span>About</span>
          <div
            className={`${
              !showAboutDropdown && 'rotate-270'
            } transition-all duration-300 ease-in-out`}
          >
            <CaretDownIcon color="black" />
          </div>
        </div>

        <AnimatePresence>
          {showAboutDropdown && <AboutDropdown />}
        </AnimatePresence>
      </div>
      <NavLink to="/programmes">Programmes</NavLink>
      <div className="">
        <div
          onClick={() => setShowMediaDropdown((prev) => !prev)}
          className="space-x-3 flex items-center justify-between cursor-pointer"
        >
          <span>Media</span>
          <div
            className={`${
              !showMediaDropdown && 'rotate-270'
            } transition-all duration-300 ease-in-out`}
          >
            <CaretDownIcon color="black" />
          </div>
        </div>

        <AnimatePresence>
          {showMediaDropdown && <MediaDropdown />}
        </AnimatePresence>
      </div>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Drawer;
