import { CertificateTag, DiplomaTag } from '../Icons';

const Courses = () => {
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
  ];
  return (
    <div className="mt-[10vh]">
      <div className="flex flex-col w-[90vw] mx-auto text-center space-y-2">
        <p className="text-[#214832] text-[16px] font-semibold">Our courses</p>
        <h2 className="lg:text-[38px] text-[30px] text-[#101B28] font-semibold">
          Empower your mind
        </h2>
        <p className="text-[#344054] lg:text-[20px] lg:w-[70%] mx-auto">
          We offer a range of courses designed to deepen understanding between
          Christians and Muslims, promote dialogue, and support peaceful
          interfaith relations.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-10 lg:w-[90vw] w-[95vw] mx-auto mt-10 mb-20">
        {courseItems.map((course) => (
          <div key={course.id} className="bg-[#ffffff] rounded-b-2xl shadow-lg">
            <div
              className="h-55 bg-cover bg-center flex items-end justify-end"
              style={{ backgroundImage: `url(${course.backgroundImg})` }}
            >
              <div className="p-4">{course.tag}</div>
            </div>
            <h3 className="text-[20px] text-[#101B28] p-4">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
