import { useState } from 'react';
import { CaretDownIcon, CloseIcon, HamburgerIcon } from '../Icons';
import { AnimatePresence, motion } from 'framer-motion';
import AboutDropdown from '../dropdowns/AboutDropdown';
import MediaDropdown from '../dropdowns/MediaDropdown';
import { NavLink } from 'react-router-dom';
import Drawer from './Drawer';

const Header = ({ color }: { color?: string }) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState<boolean>(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState<boolean>(false);
  return (
    <div className="">
      <div className="flex justify-between items-center w-[90vw] mx-auto pt-4">
        <div className="lg:hidden block">
          <img src="/assets/logo.svg" alt="img" />
        </div>
        <div className="hidden lg:flex items-center space-x-10 uppercase">
          <img src="/assets/logo.svg" alt="img" />
          <NavLink to="/" className="cursor-pointer pl-10">
            Home
          </NavLink>
          <div className="relative">
            <div
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <span>About</span>
              <CaretDownIcon />
            </div>

            <AnimatePresence>
              {showAboutDropdown && (
                <div
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                >
                  <AboutDropdown />
                </div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/programmes" className="cursor-pointer">
            Programmes
          </NavLink>
          <div className="relative">
            <div
              onMouseEnter={() => setShowMediaDropdown(true)}
              onMouseLeave={() => setShowMediaDropdown(false)}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <span>Media</span>
              <CaretDownIcon />
            </div>

            <AnimatePresence>
              {showMediaDropdown && (
                <div
                  onMouseEnter={() => setShowMediaDropdown(true)}
                  onMouseLeave={() => setShowMediaDropdown(false)}
                >
                  <MediaDropdown />
                </div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/blog" className="cursor-pointer">
            Blog
          </NavLink>
        </div>

        <NavLink to="/contact" className="uppercase lg:block hidden">
          Contact
        </NavLink>
        <div
          className="lg:hidden"
          onClick={() => setShowDrawer((prev) => !prev)}
        >
          <AnimatePresence mode="wait">
            {showDrawer ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="z-50 fixed top-10 right-4"
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                key="hamburger"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <HamburgerIcon color={color} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className=""
          >
            <Drawer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
