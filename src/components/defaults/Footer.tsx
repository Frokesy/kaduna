import { NavLink } from 'react-router-dom';
import {
  AddressIcon,
  EmailIcon,
  Facebook,
  FooterLogo,
  Google,
  LinkedIn,
  PhoneIcon,
  Twitter,
} from '../Icons';
import { aboutDropdown, mediaDropdown } from '../data/DropdownData';

const Footer = () => {
  return (
    <div className="bg-[#ffffff] lg:py-20 py-10 lg:rounded-t-2xl mt-20 px-6 lg:px-20">
      <div className="flex justify-between lg:flex-row flex-col lg:space-x-10 space-y-10 lg:space-y-0">
        <div className="flex flex-col space-y-2 lg:w-[30%]">
          <FooterLogo />
          <span className="text-[#687D85] mt-3">
            Our vision is a Nigeria where Christian and Muslim communities in
            spite of their differences work together for justice, peace and
            reconciliation towards the holistic development of the human family
            and the environment.
          </span>
        </div>

        <div className="flex flex-col space-y-4 lg:w-[20%]">
          <h2 className="font-semibold">Contact Info</h2>

          <div className="flex items-center space-x-2">
            <AddressIcon />
            <p className="text-[#687D85]">
              Address: No. 8, Ukissa Crescent, Off Bida Road, Kaduna - Nigeria
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon />
            <p className="text-[#687D85]">Phone: +234 (0)803 9501 998</p>
          </div>
          <div className="flex items-center space-x-2">
            <EmailIcon />
            <div className="text-[#687D85]">
              <p className="">Emails:</p>
              <p className="">kadunacenter2003@gmail.com</p>
              <p className="">mails@kadacmr.org</p>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between lg:w-[35%] grid grid-cols-2">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold">About</h2>
            {aboutDropdown.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="text-[14px] text-[#687D85]"
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold">Media</h2>
            {mediaDropdown.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="text-[14px] text-[#687D85]"
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col space-y-4 lg:mt-0 mt-6">
            <h2 className="font-semibold">Legal</h2>
            <NavLink to="/terms" className="text-[14px] text-[#687D85]">
              Terms
            </NavLink>
            <NavLink
              to="/privacy-policy"
              className="text-[14px] text-[#687D85]"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/cookies-policy"
              className="text-[14px] text-[#687D85]"
            >
              Cookies Policy
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mt-20 flex lg:flex-row flex-col-reverse justify-between lg:items-center">
        <p className="text-[16px] lg:mt-0 mt-10 text-[#687D85]">
          © 2025 - Kaduna Centre for The Study of Christian-Muslim Relations.
          All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <Twitter />
          <LinkedIn />
          <Facebook />
          <Google />
        </div>
      </div>
    </div>
  );
};

export default Footer;
