import { useRef, useState, useEffect } from 'react';
import { CertificateTag, DiplomaTag } from '../Icons';

const Courses = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

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
      title: 'Islamic theology',
      backgroundImg: '/assets/course-imgs/img-three.jpg',
      tag: <DiplomaTag />,
    },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector('.course-card');
      if (firstCard) {
        const styles = window.getComputedStyle(firstCard as HTMLElement);
        const gap = parseFloat(styles.marginRight || '0');
        setCardWidth((firstCard as HTMLElement).clientWidth + gap);
      }
    }
  }, []);

  const updateButtonState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setDisablePrev(scrollLeft <= 0);
    setDisableNext(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  const scrollByAmount = (amount: number) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });

    setTimeout(updateButtonState, 300);
  };

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

      <div
        ref={scrollRef}
        onScroll={updateButtonState}
        className="w-[90vw] mx-auto mt-6 flex lg:space-x-10 space-x-4 overflow-x-hidden flex-nowrap"
      >
        {courseItems.map((course) => (
          <div
            key={course.id}
            className="course-card shrink-0 mb-10 bg-white rounded-b-2xl shadow-lg lg:w-100 w-[80vw]"
          >
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

      <div className="w-[90vw] mx-auto flex justify-center space-x-10">
        <button
          onClick={() => scrollByAmount(-cardWidth)}
          disabled={disablePrev}
          className={`bg-white shadow px-4 py-2 rounded-full ${
            disablePrev ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          ◀
        </button>

        <button
          onClick={() => scrollByAmount(cardWidth)}
          disabled={disableNext}
          className={`bg-white shadow px-4 py-2 rounded-full ${
            disableNext ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          ▶
        </button>
      </div>

      <div className="flex justify-end w-[90vw] mx-auto mt-6">
        <button>View all courses</button>
      </div>
    </div>
  );
};

export default Courses;
