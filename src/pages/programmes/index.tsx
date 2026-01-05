import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DefaultHero from '../../components/defaults/DefaultHero';
import Footer from '../../components/defaults/Footer';
import Newsletter from '../../components/home/Newsletter';
import {
  CertificateTag,
  DiplomaTag,
  FilterIcon,
  SearchIcon,
} from '../../components/Icons';
import Container from '../../components/defaults/Container';

type Course = {
  id: number;
  title: string;
  backgroundImg: string;
  type: 'certificate' | 'diploma';
  duration: '1-3' | '4-6' | '7-12' | '>12';
  keywords: string[];
};

const Programmes = () => {
  const courseItems: Course[] = [
    {
      id: 1,
      title: 'Introduction to Islam',
      backgroundImg: '/assets/course-imgs/img-one.jpg',
      type: 'certificate',
      duration: '1-3',
      keywords: ['islam', 'theology'],
    },
    {
      id: 2,
      title: 'Islamic History',
      backgroundImg: '/assets/course-imgs/img-two.jpg',
      type: 'diploma',
      duration: '7-12',
      keywords: ['history', 'islam'],
    },
    {
      id: 3,
      title: 'Islamic Theology',
      backgroundImg: '/assets/course-imgs/img-three.jpg',
      type: 'diploma',
      duration: '4-6',
      keywords: ['theology', 'islam'],
    },
    {
      id: 4,
      title: 'Christian - Muslim Relations',
      backgroundImg: '/assets/course-imgs/img-four.jpg',
      type: 'certificate',
      duration: '4-6',
      keywords: ['christian-muslim', 'history'],
    },
    {
      id: 5,
      title: 'Quran Arabic (Basic)',
      backgroundImg: '/assets/course-imgs/img-five.jpg',
      type: 'certificate',
      duration: '1-3',
      keywords: ['arabic', 'quran'],
    },
  ];

  const [search, setSearch] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const [durations, setDurations] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleValue = (
    value: string,
    state: string[],
    setState: (v: string[]) => void
  ) => {
    setState(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  const filteredCourses = courseItems.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = types.length === 0 || types.includes(course.type);

    const matchesDuration =
      durations.length === 0 || durations.includes(course.duration);

    const matchesKeywords =
      keywords.length === 0 ||
      keywords.some((k) => course.keywords.includes(k));

    return matchesSearch && matchesType && matchesDuration && matchesKeywords;
  });

  return (
    <Container>
      <DefaultHero
        title="Programmes"
        img="/assets/hero-imgs/programme-hero.png"
      />

      <div className="lg:my-30 my-20 w-[90vw] mx-auto flex lg:flex-row flex-col lg:space-x-10">
        <div className="lg:w-[25%]">
          <div className="bg-gray-100 border border-[#EAECF0] rounded-lg px-4 py-6">
            <div className="flex flex-col space-y-3">
              <h2 className="text-[14px] text-[#344054]">Search</h2>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-3 w-full bg-white p-3 rounded-lg">
                  <SearchIcon />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent outline-none w-full"
                  />
                </div>
                <button
                  onClick={() => setShowFilters((p) => !p)}
                  className="border border-[#ccc] p-2 rounded-lg lg:hidden"
                >
                  <FilterIcon />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {(showFilters || window.innerWidth >= 1024) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-8">
                    <h2 className="font-semibold text-[#101828]">
                      Programme type
                    </h2>
                    <div className="mt-3 space-y-2">
                      {['certificate', 'diploma'].map((t) => (
                        <label
                          key={t}
                          className="flex items-center space-x-3 text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={types.includes(t)}
                            onChange={() => toggleValue(t, types, setTypes)}
                          />
                          <span className="capitalize">{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="font-semibold text-[#101828]">
                      Programme duration
                    </h2>
                    <div className="mt-3 space-y-2">
                      {['1-3', '4-6', '7-12', '>12'].map((d) => (
                        <label
                          key={d}
                          className="flex items-center space-x-3 text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={durations.includes(d)}
                            onChange={() =>
                              toggleValue(d, durations, setDurations)
                            }
                          />
                          <span>{d === '>12' ? '>1 year' : `${d} months`}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="font-semibold text-[#101828]">Keywords</h2>
                    <div className="mt-3 space-y-2">
                      {[
                        'arabic',
                        'islam',
                        'history',
                        'theology',
                        'christian-muslim',
                        'quran',
                      ].map((k) => (
                        <label
                          key={k}
                          className="flex items-center space-x-3 text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={keywords.includes(k)}
                            onChange={() =>
                              toggleValue(k, keywords, setKeywords)
                            }
                          />
                          <span className="capitalize">
                            {k.replace('-', ' ')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:w-[60%] mt-10 lg:mt-0">
          <h2 className="font-semibold mb-10">
            Explore our range of educational and interfaith courses
          </h2>

          <motion.div layout className="grid lg:grid-cols-2 gap-10">
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <motion.div
                  layout
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-b-2xl shadow-lg"
                >
                  <div
                    className="h-55 bg-cover bg-center flex items-end justify-end"
                    style={{
                      backgroundImage: `url(${course.backgroundImg})`,
                    }}
                  >
                    <div className="p-4">
                      {course.type === 'certificate' ? (
                        <CertificateTag />
                      ) : (
                        <DiplomaTag />
                      )}
                    </div>
                  </div>
                  <h3 className="text-[20px] text-[#101B28] p-4">
                    {course.title}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Programmes;
