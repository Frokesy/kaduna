import { useState } from 'react';
import DefaultHero from '../../../components/defaults/DefaultHero';
import Footer from '../../../components/defaults/Footer';
import Newsletter from '../../../components/home/Newsletter';
import { TimerIcon } from '../../../components/Icons';
import Container from '../../../components/defaults/Container';
import { NavLink } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'The permanent site project - the journey so far',
      excerpt:
        'A short documentary on the permanent site construction project of the Kaduna Centre for the Study of Christian-Muslim Relations.',
      imageUrl: '/assets/blog-img-one.png',
      date: '15 Nov, 2023',
      author: 'Admin',
      url: '/news/1',
    },
    {
      id: 2,
      title: 'Bishop Fearon named to head Kaduna peace commission',
      excerpt:
        'An Anglican cleric, Josiah Idowu-Fearon, is to head the Kaduna State Peace Commission. The nomination of the former Archbishop of Kaduna was announced on Thursday in Kadun',
      imageUrl: '/assets/hero-imgs/img-three.png',
      date: '17 Sep, 2017',
      author: 'Admin',
      url: '/news/2',
    },
    {
      id: 3,
      title: 'KCSCMR holds their 2017 graduation ceremony',
      excerpt:
        'The Kaduna Centre for the Study of Christian-Muslim Relations, today hold their graduation ceremony. It was reported that the Kadunna centre was founded by Rev. Dr. Josiah Idowu Fearon, former Bishop...',
      imageUrl: '/assets/blog-img-three.png',
      date: '08 Apr, 2017',
      author: 'Admin',
      url: '/news/3',
    },
  ];

  const editorsPicks = [
    { id: 1, title: 'The permanent site project - the journey so far' },
    { id: 2, title: 'The permanent site project - the journey so far' },
    { id: 3, title: 'The permanent site project - the journey so far' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const totalPages = Math.ceil(newsItems.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentNews = newsItems.slice(startIndex, startIndex + postsPerPage);

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
    <Container>
      <DefaultHero title="News" img="/assets/hero-imgs/news-hero.png" />

      <div className="lg:my-[15vh] my-20 flex lg:flex-row flex-col justify-between lg:space-x-10 w-[90vw] mx-auto">
        <div className="lg:w-[60%]">
          <h2 className="text-[20px] font-semibold">Latest news</h2>
          <p className="text-[#101828] text-[16px] mt-2">
            Catch up on recent updates, events, and developments from our Centre
            and interfaith community.
          </p>

          <div className="mt-10 flex flex-col space-y-6">
            {currentNews.map((item) => (
              <div
                key={item.id}
                className="flex lg:flex-row flex-col-reverse justify-between lg:items-center lg:space-x-6"
              >
                <div className="space-y-3 lg:mt-0 mt-4">
                  <NavLink to={item.url}>
                    <h2 className="text-[24px] font-semibold">{item.title}</h2>
                  </NavLink>
                  <p className="">{item.excerpt}</p>
                  <div className="flex justify-between">
                    <span className="text-[#475467] text-[12px]">
                      {item.date}
                    </span>
                    <NavLink to={item.url}>
                      <span className="text-[#214832] text-[12px]">
                        Read more
                      </span>
                    </NavLink>
                  </div>
                </div>
                <div className="lg:w-[25%] lg:mt-0 mt-6">
                  <div
                    className="h-54.25 lg:w-68.5 bg-cover bg-center flex items-end justify-end"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  >
                    <div className="p-2 bg-[#782353] flex items-center space-x-3">
                      <TimerIcon />
                      <span className="text-[12px] text-white">
                        5 mins read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[30%] lg:mt-0 mt-20">
          <h2 className="text-[20px] font-semibold">Editor's picks</h2>
          <p className="text-[#101828] text-[16px] mt-2">
            Catch up on recent updates, events, and developments from our Centre
            and interfaith community.
          </p>

          <div className="mt-6 bg-gray-100 border border-gray-200">
            {editorsPicks.map((item) => (
              <div
                key={item.id}
                className="border-b-2 border-gray-200 p-6 text-[20px] font-semibold"
              >
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90vw] mx-auto mt-20 mb-30">
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

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default News;
