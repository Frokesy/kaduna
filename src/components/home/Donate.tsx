import { useState } from 'react';
import { EuroIcon, NairaIcon, PoundIcon } from '../Currencies';
import { CopyIcon } from '../Icons';

const Donate = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const accountDetails = [
    { id: 1, currency: <NairaIcon />, accountNumber: '0523882933' },
    { id: 2, currency: <EuroIcon />, accountNumber: '052308882964' },
    { id: 3, currency: <PoundIcon />, accountNumber: '0012038841' },
    { id: 4, currency: <PoundIcon />, accountNumber: '0523882933' },
  ];

  const altAccountDetails = [
    { id: 5, currency: <NairaIcon />, accountNumber: 'GTBank: 0523882933' },
    { id: 6, currency: <NairaIcon />, accountNumber: 'FCMB: 052308882964' },
  ];

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);

      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

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
            have become a trusted voice in interfaith education.
          </p>
        </div>

        <div className="mt-20 lg:rounded-2xl lg:w-[90vw] w-full mx-auto bg-[#2B5D40] text-white flex flex-col lg:flex-row justify-between">
          <div className="px-4 py-6 lg:w-[30%]">
            <h2 className="text-[20px] font-semibold mb-4">
              Kaduna Center Fundraising
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Copy a desired account number.</li>
              <li>Send amount you want to donate.</li>
              <li>Congratulations you have just donated!</li>
              <li>Your name will be added amongst friends of the center.</li>
            </ol>
          </div>

          <div className="lg:w-[25%] py-4">
            <h2 className="text-[16px] text-center">
              Account name: Kd. Cnt For the Study of Chr. Ms. Relations.
            </h2>

            <div className="mt-4 space-y-3 w-[70%] mx-auto">
              {accountDetails.map((account) => (
                <div
                  key={account.id}
                  className="bg-[#BFD0C6] flex justify-between items-center p-3 rounded-2xl"
                >
                  <div className="bg-white p-2 rounded-full">
                    {account.currency}
                  </div>

                  <span className="font-semibold text-black text-[18px]">
                    {account.accountNumber}
                  </span>

                  <button
                    onClick={() =>
                      copyToClipboard(account.accountNumber, account.id)
                    }
                    className="relative group cursor-pointer"
                    aria-label="Copy account number"
                  >
                    <CopyIcon />
                    {copiedId === account.id && (
                      <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <h2 className="text-[16px] text-center my-4">
              Alternative accounts
            </h2>

            <div className="space-y-3 w-[90%] mx-auto">
              {altAccountDetails.map((account) => (
                <div
                  key={account.id}
                  className="bg-[#BFD0C6] flex justify-between items-center p-3 rounded-2xl"
                >
                  <div className="bg-white p-2 rounded-full">
                    {account.currency}
                  </div>

                  <span className="font-semibold text-black text-[18px]">
                    {account.accountNumber}
                  </span>

                  <button
                    onClick={() =>
                      copyToClipboard(account.accountNumber, account.id)
                    }
                    className="relative cursor-pointer"
                  >
                    <CopyIcon />
                    {copiedId === account.id && (
                      <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[35%] flex flex-col lg:flex-row justify-between lg:items-center lg:pr-10">
            <div>
              <img src="/assets/house-one.png" alt="house" />
              <img src="/assets/house-two.png" alt="house" />
            </div>
            <img
              src="/assets/pc.png"
              alt="proposed center"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
