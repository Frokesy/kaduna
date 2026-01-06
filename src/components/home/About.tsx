import { NavLink } from 'react-router-dom';
import { ArrowRightIcon, MissionIcon } from '../Icons';

const About = () => {
  return (
    <div className="mt-[10vh] w-[90vw] mx-auto">
      <div className="flex flex-col space-y-2">
        <p className="text-[#214832] text-[16px] font-semibold">About us</p>
        <h2 className="lg:text-[38px] text-[30px] text-[#101B28] font-semibold">
          Promoting Peace, Reconciliation & Development through Education since
          2004.
        </h2>
        <p className="text-[#344054] lg:text-[20px]">
          We take our mission of increasing access to quality religious
          education seriously. We offer Educational and Enlightenment Workshops
          and Seminars on Christian-Muslim Relations.
        </p>
      </div>

      <div className="flex  lg:flex-row flex-col justify-between items-center mt-10">
        <div className="lg:w-[45%]">
          <div className="flex">
            <MissionIcon />
            <h4 className="text-[#101B28] pt-4 text-[20px]">Our Mission</h4>
          </div>
          <div className="lg:pl-20">
            <p className="text-[#344054] text-[16px]">
              We have been effectively engaged in running Enlightenment Programs
              and Courses for Christian and Muslim faithfuls as would foster
              better knowledge and understanding of Islam and Muslims thus
              facilitating interfaith cooperative behaviour in an atmosphere of
              harmony and peaceful coexistence so vital to all-round sectoral
              development.
            </p>
            <p className="text-[#344054] text-[16px] mt-2">
              1. To Educate Nigerians on peace and peaceful co-existence.
            </p>
            <p className="text-[#344054] text-[16px] mt-2">
              2. To promote a culture of respect and positive tolerance.
            </p>
            <p className="text-[#344054] text-[16px] mt-2">
              3. To organize and teach courses of studies in Islam and
              Christianity.
            </p>
          </div>
          <div className="flex lg:justify-end justify-center lg:mb-0 mb-10 mt-4">
            <NavLink
              to="/about"
              className="flex items-center space-x-3 border border-[#ccc] text-[#214832] px-6 py-2 rounded-md transition"
            >
              <span>Learn More</span>
              <ArrowRightIcon />
            </NavLink>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <img
            src="/assets/hero-imgs/img-two.png"
            alt="about-img"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
