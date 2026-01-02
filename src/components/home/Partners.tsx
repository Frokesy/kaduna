import {
  Catalog,
  Circooles,
  Hourglass,
  Layers,
  Sisyphus,
} from '../PartnerLogos';

const Partners = () => {
  return (
    <div className="py-[10vh] bg-[#F9FAFB]">
      <div className="flex flex-col w-[90vw] mx-auto text-center space-y-2 overflow-hidden">
        <h2 className="lg:text-[38px] text-[30px] text-[#101B28] font-semibold">
          Our partners
        </h2>
        <p className="text-[#344054] lg:text-[20px] lg:w-[70%] mx-auto">
          We collaborate with trusted organizations and institutions that share
          our commitment to interfaith understanding and peaceful coexistence.
        </p>
      </div>

      <div className="scroll-wrapper mt-10">
        <div className="scroll-track">
          <div className="flex items-center lg:space-x-20 space-x-10">
            <Layers />
            <Catalog />
            <Hourglass />
            <Sisyphus />
            <Circooles />
          </div>
          <div className="flex items-center lg:space-x-20 space-x-10 ml-10">
            <Layers />
            <Catalog />
            <Hourglass />
            <Sisyphus />
            <Circooles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
