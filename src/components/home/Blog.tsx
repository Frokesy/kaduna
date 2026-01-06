import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon } from '../Icons';
import { NavLink } from 'react-router-dom';

type BlogItem = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
};

const Blog = () => {
  const selectorItems = ['News', 'Our blog', 'Upcoming events'] as const;
  type Tab = (typeof selectorItems)[number];

  const [activeTab, setActiveTab] = useState<Tab>('News');

  const newsItems: BlogItem[] = [
    {
      id: 1,
      title: 'The permanent site project - the journey so far',
      excerpt:
        'A short documentary on the permanent site construction project of the Kaduna Centre for the Study of Christian-Muslim Relations.',
      imageUrl: '/assets/blog-img-one.png',
      date: '15 Nov, 2023',
      author: 'Admin',
    },
    {
      id: 2,
      title: 'Bishop Fearon named to head Kaduna peace commission',
      excerpt:
        'An Anglican cleric, Josiah Idowu-Fearon, is to head the Kaduna State Peace Commission.',
      imageUrl: '/assets/hero-imgs/img-three.png',
      date: '15 Nov, 2023',
      author: 'Admin',
    },
    {
      id: 3,
      title: 'KCSCMR holds their 2017 graduation ceremony',
      excerpt:
        'The Kaduna Centre for the Study of Christian-Muslim Relations today held their graduation ceremony.',
      imageUrl: '/assets/blog-img-three.png',
      date: '15 Nov, 2023',
      author: 'Admin',
    },
  ];

  const blogItems: BlogItem[] = [
    {
      id: 1,
      title: 'Reflections on our common annual rituals',
      excerpt:
        'In this year alone, Nigerians – Christians and Muslims – have shared three religious rituals together...',
      imageUrl: '/assets/blog-imgs/img-one.jpg',
      date: '16 Aug, 2012',
      author: 'Admin',
    },
    {
      id: 2,
      title: 'Peace beyond 2011',
      excerpt:
        'As Nigerians go to the polls from Saturday the 2nd of April, it is necessary to give a thought...',
      imageUrl: '/assets/blog-imgs/img-two.jpg',
      date: '05 Jan, 2011',
      author: 'Admin',
    },
  ];

  const upcomingEvents: BlogItem[] = [];

  const contentMap: Record<Tab, BlogItem[]> = {
    News: newsItems,
    'Our blog': blogItems,
    'Upcoming events': upcomingEvents,
  };

  const activeItems = contentMap[activeTab];

  return (
    <div className="my-[10vh]">
      <div className="h-10 bg-[#f1f1f1]" />

      <div className="w-[90vw] mx-auto">
        <div className="flex mt-10">
          <div className="flex bg-[#F9FAFB] p-2 space-x-3 rounded-xl">
            {selectorItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 py-1 rounded-lg text-[14px] transition-all duration-200
                  ${
                    activeTab === item
                      ? 'bg-white shadow-md'
                      : 'hover:bg-white/60'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[#214832] text-[16px] font-semibold">
              {activeTab}
            </p>
            <NavLink
              to="/blog"
              className="bg-[#2B5D40] text-white px-6 py-3 font-semibold rounded-lg"
            >
              View all posts
            </NavLink>
          </div>

          <h2 className="lg:text-[38px] text-[30px] font-semibold text-[#101B28]">
            {activeTab === 'Upcoming events'
              ? 'Upcoming events'
              : 'Latest updates'}
          </h2>

          <p className="text-[#344054] lg:text-[20px] lg:w-[50vw]">
            Read our latest insights, stories, and reflections on interfaith
            dialogue, peacebuilding, and community impact.
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-10 mt-10"
        >
          <AnimatePresence mode="wait">
            {activeItems.length > 0 ? (
              activeItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-[#101B28] text-[20px] font-semibold mt-2">
                        {item.title}
                      </h3>
                      <p className="text-[#344054] mt-2">{item.excerpt}</p>
                    </div>

                    <div className="flex items-center mt-6 space-x-3">
                      <CalendarIcon />
                      <div className="flex flex-col">
                        <span className="font-semibold text-[14px]">
                          {item.author}
                        </span>
                        <span className="text-[#6B7280] text-[14px]">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-20 text-[#667085]"
              >
                No content available for this section yet.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
