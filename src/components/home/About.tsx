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
          "We are actively committed to offering impactful enlightenment
          programs and courses for both Christians and Muslims. These
          initiatives foster deeper understanding of Islam and promote
          interfaith cooperation, helping to build a peaceful and harmonious
          society—essential for holistic development across all sectors."
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
              Our ultimate goal is to create a critical mass of young men and
              women who understand their religious teachings and of their
              neighbors.
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
            <button className="flex items-center space-x-3 border border-[#ccc] text-[#214832] px-6 py-2 rounded-md transition">
              <span>Learn More</span>
              <ArrowRightIcon />
            </button>
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
