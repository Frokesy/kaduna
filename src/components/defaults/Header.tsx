import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { CaretDownIcon, CloseIcon, HamburgerIcon } from '../Icons';
import AboutDropdown from '../dropdowns/AboutDropdown';
import MediaDropdown from '../dropdowns/MediaDropdown';
import Drawer from './Drawer';

const Header = ({ color }: { color?: string }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 700);
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={scrolled ? 'sticky' : 'hero'}
        variants={{
          hero: {
            backgroundColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(0px)',
            boxShadow: 'none',
            y: 0,
          },
          sticky: {
            backgroundColor: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
            y: [-20, 0],
          },
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`w-full z-50 ${
          scrolled ? 'fixed top-0 left-0' : 'relative'
        }`}
      >
        <div className="flex justify-between items-center w-[90vw] mx-auto py-4 text-white">
          <NavLink to="/" className="lg:hidden block">
            <img src="/assets/logo.svg" alt="logo" />
          </NavLink>

          <div className="hidden lg:flex items-center space-x-10 uppercase">
            <NavLink to="/">
              <img src="/assets/logo.svg" alt="logo" />
            </NavLink>

            <NavLink to="/" className="pl-10">
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
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setShowAboutDropdown(true)}
                    onMouseLeave={() => setShowAboutDropdown(false)}
                  >
                    <AboutDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/programmes">Programmes</NavLink>

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
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    onMouseEnter={() => setShowMediaDropdown(true)}
                    onMouseLeave={() => setShowMediaDropdown(false)}
                    transition={{ duration: 0.2 }}
                  >
                    <MediaDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/blog">Blog</NavLink>
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
                  className="fixed top-6 right-4 z-50"
                >
                  <CloseIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="hamburger"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <HamburgerIcon color={color} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40"
          >
            <Drawer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
