import { useState } from 'react';
import DefaultHero from '../../../components/defaults/DefaultHero';
import { videoItems } from '../../../components/data';
import Newsletter from '../../../components/home/Newsletter';
import Footer from '../../../components/defaults/Footer';

const Videos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const totalPages = Math.ceil(videoItems.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentVideos = videoItems.slice(startIndex, startIndex + postsPerPage);

  const getPageNumbers = (current: number, total: number) => {
    const delta = 2;
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];
    let last: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (const page of range) {
      if (last !== undefined) {
        if ((page as number) - last === 2) {
          rangeWithDots.push(last + 1);
        } else if ((page as number) - last > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(page);
      last = page as number;
    }

    return rangeWithDots;
  };

  return (
    <div>
      <DefaultHero title="Videos" img="/assets/hero-imgs/img-five.png" />

      <div className="lg:my-[15vh] my-20 w-[90vw] mx-auto">
        <h2 className="text-[20px] font-semibold">Latest videos</h2>
        <p className="text-[#101828] text-[16px] mt-2">
          Explore our video library to see our programs, events, and stories
          that promote interfaith understanding and peace
        </p>

        <div className="mt-10 flex flex-col space-y-10">
          {currentVideos.map((item) => (
            <div
              key={item.id}
              className="flex lg:flex-row flex-col-reverse justify-between items-center gap-6"
            >
              <div className="lg:w-[50%]">
                <h3 className="text-[20px] font-semibold">{item.title}</h3>
                <p className="text-[#101828] text-[16px] mt-2">
                  {item.excerpt}
                </p>
              </div>

              <div className="lg:w-[40%]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-20">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="border border-[#cccccc] py-2 px-6 rounded-lg font-semibold disabled:opacity-50"
          >
            Previous
          </button>

          <div className="flex items-center space-x-3">
            {getPageNumbers(currentPage, totalPages).map((page, idx) =>
              page === '...' ? (
                <span key={idx} className="px-2 text-[#667085]">
                  ...
                </span>
              ) : (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(page as number)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition ${
                    currentPage === page
                      ? 'bg-[#182B69] text-white'
                      : 'text-[#182B69] hover:bg-[#F2F4F7]'
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="border border-[#cccccc] py-2 px-6 rounded-lg font-semibold disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Videos;
