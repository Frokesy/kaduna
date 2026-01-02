import { useState } from 'react';
import { CalendarIcon } from '../Icons';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('News');
  const selectorItems = ['News', 'Our blog', 'Upcoming events'];

  const blogItems = [
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
        'The Kaduna Centre for the Study of Christian-Muslim Relations, today hold their graduation ceremony.',
      imageUrl: '/assets/blog-img-three.png',
      date: '15 Nov, 2023',
      author: 'Admin',
    },
  ];
  return (
    <div className="mt-[10vh]">
      <div className="h-10 bg-[#f1f1f1]"></div>
      <div className="w-[90vw] mx-auto">
        <div className="flex mt-10">
          <div className="flex bg-[#F9FAFB] p-2 space-x-3 rounded-xl">
            {selectorItems.map((item) => (
              <button
                key={item}
                className={`${
                  activeTab === item ? 'bg-white shadow-md' : ''
                } px-4 py-1 rounded-lg text-[14px] transition-all duration-200 ease-in-out`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[#214832] text-[16px] font-semibold">News</p>
              <button className="bg-[#2B5D40] text-[#ffffff] px-6 py-3 font-semibold rounded-lg">
                View all posts
              </button>
            </div>
            <h2 className="lg:text-[38px] text-[30px] text-[#101B28] lg:-mt-4 font-semibold">
              Latest news
            </h2>
            <p className="text-[#344054] lg:text-[20px] lg:w-[50vw]">
              Read our latest insights, stories, and reflections on interfaith
              dialogue, peacebuilding, and community impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-10 mt-10">
          {blogItems.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl flex flex-col justify-between shadow-md overflow-hidden"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-[#101B28] text-[20px] font-semibold mt-2">
                  {blog.title}
                </h3>
                <p className="text-[#344054] mt-2">{blog.excerpt}</p>
                <div className="flex items-center mt-6 space-x-3">
                  <CalendarIcon />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[14px]">
                      {blog.author}
                    </span>
                    <span className="text-[#6B7280] text-[14px]">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
