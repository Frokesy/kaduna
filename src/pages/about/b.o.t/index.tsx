import { boardOfTrustees } from '../../../components/data';
import Container from '../../../components/defaults/Container';
import DefaultHero from '../../../components/defaults/DefaultHero';
import Footer from '../../../components/defaults/Footer';
import Newsletter from '../../../components/home/Newsletter';
import { BotIcon } from '../../../components/Icons';

const BoardOfTrustees = () => {
  return (
    <Container>
      <DefaultHero
        title="Board of Trustees"
        img="/assets/hero-imgs/img-four.png"
      />
      <div className="bg-[#05130b] text-[#ffffff] lg:py-30 py-10">
        <div className="w-[90vw] mx-auto flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[45%]">
            <div className="flex lg:flex-row flex-col">
              <BotIcon />
              <h4 className="font-semibold text-[30px] lg:pb-0 pb-3 lg:text-[36px]">
                Our board of Trustees
              </h4>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[20px]">
                Meet the visionary leaders who guide and support our mission of
                promoting interfaith understanding and peaceful coexistence.
              </p>
            </div>
          </div>

          <div className="lg:w-75 lg:mt-0 mt-10">
            {boardOfTrustees.map((item) => (
              <div key={item.id} className="mb-6 bg-white rounded-b-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="lg:w-75 w-full lg:h-70 object-cover"
                />
                <div className="lg:p-8 p-4">
                  <h3 className="lg:text-[20px] text-[#101B28]">{item.name}</h3>
                  <p className="lg:text-[16px] text-[#1D2939] mt-2">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default BoardOfTrustees;
