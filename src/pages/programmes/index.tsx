import DefaultHero from '../../components/defaults/DefaultHero';
import Footer from '../../components/defaults/Footer';
import Newsletter from '../../components/home/Newsletter';
import { CertificateTag, DiplomaTag, SearchIcon } from '../../components/Icons';

const Programmes = () => {
  const courseItems = [
    {
      id: 1,
      title: 'Introduction to Islam',
      backgroundImg: '/assets/course-imgs/img-one.jpg',
      tag: <CertificateTag />,
    },
    {
      id: 2,
      title: 'Islamic history',
      backgroundImg: '/assets/course-imgs/img-two.jpg',
      tag: <DiplomaTag />,
    },
    {
      id: 3,
      title: 'Islamic theology',
      backgroundImg: '/assets/course-imgs/img-three.jpg',
      tag: <DiplomaTag />,
    },
    {
      id: 4,
      title: 'Christian - Muslim relations',
      backgroundImg: '/assets/course-imgs/img-four.jpg',
      tag: <CertificateTag />,
    },
    {
      id: 5,
      title: 'Quran arabic basic',
      backgroundImg: '/assets/course-imgs/img-five.jpg',
      tag: <CertificateTag />,
    },
  ];
  return (
    <div>
      <DefaultHero
        title="Programmes"
        img="/assets/hero-imgs/programme-hero.png"
      />

      <div className="my-30 w-[90vw] mx-auto flex justify-between space-x-10">
        <div className="w-[25%] bg-gray-100 border border-[#EAECF0] rounded-lg px-4 py-10">
          <div className="flex flex-col space-y-3">
            <h2 className="text-[14px] text-[#344054]">Search</h2>
            <div className="bg-[#ffffff] p-3 rounded-lg flex items-center space-x-3">
              <SearchIcon />
              <input type="text" className="bg-transparent outline-none" />
            </div>
          </div>

          <div className="flex flex-col space-y-3 mt-10">
            <h2 className="text-[14px] text-[#344054]">Filter by</h2>
            <h2 className="text-[20px] font-semibold text-[#101828]">
              Programme type
            </h2>
            <div className="flex flex-col space-y-3 mt-2">
              <div className="rounded-lg flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-[#344054] text-[14px]">Certificate</span>
              </div>
              <div className="rounded-lg flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-[#344054] text-[14px]">Diploma</span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-[20px] font-semibold text-[#101828]">
                Programme duration
              </h2>
              <div className="flex flex-col space-y-3 mt-2">
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">1-3 months</span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">4-6 months</span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">
                    7-12 months
                  </span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">
                    {'>'}1 year
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-[20px] font-semibold text-[#101828]">
                Keywords
              </h2>
              <div className="flex flex-col space-y-3 mt-2">
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">Arabic</span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">Islam</span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">History</span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">Theology</span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">
                    Christian-Muslim relation
                  </span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">
                    Islamic history
                  </span>
                </div>
                <div className="rounded-lg flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[#344054] text-[14px]">Quran</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <h2 className="font-semibold">
            Explore our range of educational and interfaith courses
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-10">
            {courseItems.map((course) => (
              <div
                key={course.id}
                className="course-card bg-white rounded-b-2xl shadow-lg"
              >
                <div
                  className="h-55 bg-cover bg-center flex items-end justify-end"
                  style={{ backgroundImage: `url(${course.backgroundImg})` }}
                >
                  <div className="p-4">{course.tag}</div>
                </div>

                <h3 className="text-[20px] text-[#101B28] p-4">
                  {course.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Programmes;
