import { HamburgerIcon } from '../Icons';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-[90vw] mx-auto pt-4">
      <div className="lg:hidden block">
        <img src="/assets/logo.svg" alt="img" />
      </div>
      <div className="hidden lg:flex items-center space-x-10 uppercase">
        <img src="/assets/logo.svg" alt="img" />
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Programmes</span>
        <span className="cursor-pointer">Media</span>
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
