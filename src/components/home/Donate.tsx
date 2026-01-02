import { EuroIcon, NairaIcon, PoundIcon } from '../Currencies';
import { CopyIcon } from '../Icons';

const Donate = () => {
  const accountDetails = [
    { id: 1, currency: <NairaIcon />, accountNumber: '0523882933' },
    { id: 2, currency: <EuroIcon />, accountNumber: '052308882964' },
    { id: 3, currency: <PoundIcon />, accountNumber: '0012038841' },
    { id: 4, currency: <PoundIcon />, accountNumber: '0523882933' },
  ];

  const altAccountDetails = [
    { id: 1, currency: <NairaIcon />, accountNumber: 'GTBank: 0523882933' },
    { id: 2, currency: <NairaIcon />, accountNumber: 'FCMB: 052308882964' },
  ];
  return (
    <div className="mt-[10vh]">
      <div className="h-10 bg-[#f1f1f1]"></div>
      <div className="mt-[10vh]">
        <div className="flex flex-col w-[90vw] mx-auto space-y-2">
          <p className="text-[#214832] text-[16px] font-semibold">Donate now</p>
          <h2 className="lg:text-[38px] text-[30px] text-[#101B28] font-semibold">
            Join us in building a center for Interpersonal Muslim-Christian
            relationship
          </h2>
          <p className="text-[#344054] lg:text-[20px]">
            Through years of dedicated work in Christian-Muslim relations, we
            have become a trusted voice in interfaith education. Our programs
            promote mutual understanding, respect, and peaceful coexistence
            among diverse faith communities
          </p>
        </div>

        <div className="mt-20 lg:rounded-2xl lg:w-[90vw] w-full mx-auto bg-[#2B5D40] text-white flex flex-col lg:flex-row justify-between">
          <div className="px-4 py-6 lg:w-[30%]">
            <h2 className="text-[20px] font-semibold mb-4">
              Kaduna Center Fundraising
            </h2>
            <p>
              Follow these simple steps to donate to our mission in building a
              center Interpersonal Muslim-Christian relationship
            </p>
            <div className="mt-6">
              <ol className="list-decimal list-inside space-y-2">
                <li>Copy a desired account number.</li>
                <li>Send amount you want to donate.</li>
                <li>Congratulations you have just donated to our cause!</li>
                <li>
                  Your name will be added amongst The friends of the center.
                </li>
              </ol>
            </div>
          </div>

          <div className="lg:w-[25%] py-4">
            <h2 className="text-[16px] text-center">
              Account name: Kd. Cnt For the Study of Chr. Ms. Relations.{' '}
            </h2>
            <div className="mt-4 space-y-3 w-[70%] mx-auto">
              {accountDetails.map((account) => (
                <div
                  key={account.id}
                  className="bg-[#BFD0C6] flex justify-between items-center space-x-2 p-3 rounded-2xl"
                >
                  <div className="bg-white p-2 rounded-full">
                    {account.currency}
                  </div>
                  <span className="font-semibold text-[#000000] text-[20px]">
                    {account.accountNumber}
                  </span>
                  <div className="">
                    <CopyIcon />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[16px] text-center my-4">
              Alternative accounts.{' '}
            </h2>
            <div className="mt-4 space-y-3 lg:w-full w-[90%] mx-auto">
              {altAccountDetails.map((account) => (
                <div
                  key={account.id}
                  className="bg-[#BFD0C6] flex justify-between items-center space-x-2 p-3 rounded-2xl"
                >
                  <div className="bg-white p-2 rounded-full">
                    {account.currency}
                  </div>
                  <span className="font-semibold text-[#000000] text-[20px]">
                    {account.accountNumber}
                  </span>
                  <div className="">
                    <CopyIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[35%] flex lg:flex-row flex-col justify-between lg:items-center lg:pr-10">
            <h2 className="text-[24px] border-t-20 border-[#ffffff] pt-10 lg:hidden font-semibold uppercase px-4 lg:mb-0 mb-4 mt-10">
              Proposed center
            </h2>
            <div className="">
              <img src="/assets/house-one.png" alt="house-img" />
              <img src="/assets/house-two.png" alt="house-img" />
            </div>
            <img
              src="/assets/pc.png"
              alt="proposed-center"
              className="lg:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
