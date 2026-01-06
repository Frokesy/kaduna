import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DefaultHero from '../../components/defaults/DefaultHero';
import Footer from '../../components/defaults/Footer';
import Newsletter from '../../components/home/Newsletter';
import { SearchIcon, TimerIcon } from '../../components/Icons';
import Container from '../../components/defaults/Container';

type BlogItem = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;

  const blogItems: BlogItem[] = [
    {
      id: 1,
      title: 'Reflections on our common annual riituals',
      excerpt:
        'In this year alone, Nigerians – Christians and Muslims - have shared three religious rituals together. The word rituals is used sociologically, to mean – the expression of religious beliefs',
      imageUrl: '/assets/blog-imgs/img-one.jpg',
      date: '20 Jan, 2025',
      author: 'Admin',
    },
    {
      id: 2,
      title: 'Peace beyond 2011',
      excerpt:
        'As Nigerians go to the polls from Saturday the 2nd of April, it is necessary to give a thought to the need for Nigeria to survive and play her vital and influential roles with the other leading...',
      imageUrl: '/assets/blog-imgs/img-two.jpg',
      date: '20 Jan, 2025',
      author: 'Admin',
    },
  ];

  const editorsPicks = [
    { id: 1, title: 'The permanent site project - the journey so far' },
    { id: 2, title: 'Bishop Fearon named to head Kaduna peace commission' },
    { id: 3, title: 'KCSCMR holds their 2017 graduation ceremony' },
  ];

  const filteredBlogs = blogItems.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q)
    );
  });

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedBlogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentBlogs = sortedBlogs.slice(startIndex, startIndex + postsPerPage);

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
      <DefaultHero title="Blog" img="/assets/hero-imgs/blog-hero.png" />

      <div className="flex lg:flex-row flex-col justify-between w-[90vw] mx-auto lg:mt-[10vh] mt-20 gap-6">
        <div className="flex items-center space-x-3 border border-[#ccc] p-3 rounded-lg lg:w-[30%]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search blog posts"
            className="w-full outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="border border-[#ccc] p-3 rounded-lg lg:w-[30%]">
          <select
            className="w-full outline-none"
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value === 'oldest' ? 'oldest' : 'newest');
              setCurrentPage(1);
            }}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:mt-20 mt-10 justify-between lg:space-x-10 w-[90vw] mx-auto">
        <div className="lg:w-[60%]">
          <h2 className="text-[20px] font-semibold">Blog posts</h2>
          <p className="text-[#101828] mt-2">
            Catch up on recent updates, events, and developments.
          </p>

          <motion.div layout className="mt-10 flex flex-col space-y-8">
            <AnimatePresence>
              {currentBlogs.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="flex lg:flex-row flex-col-reverse justify-between lg:items-center lg:space-x-6"
                >
                  <div className="space-y-3 mt-4 lg:mt-0">
                    <h2 className="text-[24px] font-semibold">{item.title}</h2>
                    <p>{item.excerpt}</p>
                    <div className="flex justify-between">
                      <span className="text-[#475467] text-[12px]">
                        {item.date}
                      </span>
                      <span className="text-[#214832] text-[12px]">
                        Read more
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-[25%] mt-6 lg:mt-0">
                    <div
                      className="h-54.25 lg:w-68.5 bg-cover bg-center flex items-end justify-end"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                      <div className="p-2 bg-[#782353] flex items-center space-x-2">
                        <TimerIcon />
                        <span className="text-[12px] text-white">
                          5 mins read
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="lg:w-[30%] mt-20 lg:mt-0">
          <h2 className="text-[20px] font-semibold">Editor's picks</h2>
          <div className="mt-6 bg-gray-100 border border-gray-200">
            {editorsPicks.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 p-6 text-[18px] font-semibold"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-[90vw] mx-auto mt-20 mb-30">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="border py-2 px-6 rounded-lg font-semibold disabled:opacity-50"
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
                className={`px-3 py-2 rounded-md text-sm font-semibold ${
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
          className="border py-2 px-6 rounded-lg font-semibold disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Blog;
