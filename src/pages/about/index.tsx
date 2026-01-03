import { useState } from 'react';
import DefaultHero from '../../components/defaults/DefaultHero';
import {
  ArrowRightIcon,
  CaretDownIcon,
  MissionIcon,
} from '../../components/Icons';
import { items, principles, qa } from '../../components/data';
import Newsletter from '../../components/home/Newsletter';

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <DefaultHero title="About Us" img="/assets/hero-imgs/img-four.png" />
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center bg-[#2F6646]">
        <div className="lg:w-[45%] text-[#ffffff] lg:mx-20 mx-6 lg:py-0 py-10">
          <h2 className="lg:text-[36px] text-[20px] font-semibold">
            Promoting Peace, Reconciliation & Development through Education
            since 2004.
          </h2>
          <p className="lg:text-[18px] text-[14px] mt-4">
            Empowering minds through Christian-Muslim educational initiatives.
          </p>
        </div>
        <div className="lg:w-[45%]">
          <img
            src="/assets/about-imgs/img-one.png"
            alt="img-one"
            className="w-full lg:h-125 h-86 object-cover"
          />
        </div>
      </div>

      <div className="w-[90vw] mx-auto lg:py-30 py-10">
        <h2 className="lg:text-[30px] text-[14px] text-center">
          "We are actively committed to offering impactful enlightenment
          programs and courses for both Christians and Muslims. These
          initiatives foster deeper understanding of Islam and promote
          interfaith cooperation, helping to build a peaceful and harmonious
          society—essential for holistic development across all sectors."
        </h2>
      </div>

      <div className="bg-[#2F6646] text-[#ffffff] lg:py-30 py-10">
        <div className="w-[90vw] mx-auto flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[45%]">
            <div className="flex">
              <MissionIcon />
              <h4 className="font-semibold text-[30px] lg:pt-0 pt-2 lg:text-[36px]">
                Our Mission
              </h4>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[20px]">
                Our ultimate goal is to create a critical mass of young men and
                women who understand their religious teachings and of their
                neighbors.
              </p>
            </div>
          </div>

          <div className="lg:w-[35%] lg:mt-0 mt-10">
            {items.map((item) => (
              <div key={item.id} className="mb-6 bg-white rounded-b-2xl">
                <img src={item.img} alt={item.title} className="w-full" />
                <h3 className="lg:text-[20px] text-[#101B28] lg:p-8 p-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex  justify-center lg:mb-0 mb-10 mt-10">
          <button className="flex items-center space-x-3 bg-[#ffffff] text-[#214832] text-[18px] font-semibold px-10 py-3 rounded-md transition">
            <span>Learn More</span>
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <div className="lg:mt-[15vh] mt-16">
        <div className="flex flex-col w-[90vw] mx-auto space-y-2 lg:pr-10">
          <p className="text-[#214832] text-[16px] font-semibold">
            Our principles
          </p>
          <h2 className="lg:text-[38px] text-[30px] text-[#101B28] font-semibold">
            How is the Kaduna Centre working for peace and reconciliation in
            Northern Nigeria?
          </h2>
          <p className="text-[#344054] lg:text-[20px]">
            The following four principles inform our contribution to cultivating
            the culture of respect for religious difference and peaceful
            coexistence.
          </p>
        </div>

        <div className="mt-10 flex justify-between lg:flex-row flex-col items-center">
          <div className="grid lg:grid-cols-2 lg:gap-10 gap-6 lg:w-[50%]">
            {principles.map((principle) => (
              <div key={principle.id} className="lg:pl-20 pl-6">
                <h3 className="lg:text-[20px] text-[18px] font-semibold text-[#101B28]">
                  {principle.title}
                </h3>
                <p className="text-[#344054] mt-2">
                  {principle.content} -{' '}
                  <span className="font-semibold">{principle.author}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="lg:w-[45%] lg:mt-0 mt-10">
            <img
              src="/assets/about-imgs/img-five.png"
              alt="img-five"
              className="w-full"
            />
          </div>
        </div>

        <div className="lg:my-[15vh] my-[10vh] w-[90vw] mx-auto flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[55%]">
            <h2 className="text-[30px] font-semibold mb-6">Q&A</h2>
            <p className="text-[18px]">
              Explore common questions and thoughtful answers about our mission,
              purpose, and the importance of Christian-Muslim relations.
            </p>

            <div className="mt-10">
              {qa.map((item) => (
                <div key={item.id} className="">
                  <div
                    onClick={() =>
                      setActiveIndex(activeIndex === item.id ? null : item.id)
                    }
                    className="mb-6 cursor-pointer flex justify-between items-center"
                  >
                    <h3 className="lg:text-[20px] lg:pr-0 font-semibold text-[#101B28]">
                      {item.question}
                    </h3>
                    <div
                      className={`transition-transform ${
                        activeIndex === item.id ? 'rotate-180' : ''
                      }`}
                    >
                      <CaretDownIcon color="black" />
                    </div>
                  </div>
                  {activeIndex === item.id && (
                    <div className="mb-10">
                      <p className="text-[#344054]">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[40%] mt-10 lg:mt-0">
            <img
              src="/assets/about-imgs/img-six.png"
              alt="img-six"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
