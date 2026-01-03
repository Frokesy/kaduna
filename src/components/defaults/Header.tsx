import { useState } from 'react';
import { CaretDownIcon, HamburgerIcon } from '../Icons';
import { AnimatePresence } from 'framer-motion';
import AboutDropdown from '../dropdowns/AboutDropdown';
import MediaDropdown from '../dropdowns/MediaDropdown';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState<boolean>(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center w-[90vw] mx-auto pt-4">
      <div className="lg:hidden block">
        <img src="/assets/logo.svg" alt="img" />
      </div>
      <div className="hidden lg:flex items-center space-x-10 uppercase">
        <img src="/assets/logo.svg" alt="img" />
        <span className="cursor-pointer pl-10">Home</span>
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
        <span className="cursor-pointer">Programmes</span>
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
        <span className="cursor-pointer">Blog</span>
      </div>

      <span className="uppercase lg:block hidden">Contact</span>
      <div className="lg:hidden block">
        <HamburgerIcon />
      </div>
    </div>
  );
};

export default Header;
