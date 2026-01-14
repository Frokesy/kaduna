import { useState } from 'react';
import Container from '../../../components/defaults/Container';
import Header from '../../../components/defaults/Header';
import Newsletter from '../../../components/home/Newsletter';
import Footer from '../../../components/defaults/Footer';

const NewsOne = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <Container>
      <Header color="black" />

      <div className="lg:w-[80vw] w-[90vw] mx-auto my-10">
        <img
          src="/assets/blog-img-one.png"
          alt="blog-img"
          className="w-full lg:h-130 object-cover"
        />
        <h1 className="lg:text-[48px] text-[36px] mt-10 text-[#101828] font-semibold">
          The Permanent Site Project - The Journey So far
        </h1>
        <p className="text-[#667085]">15 Nov, 2023</p>

        <button
          onClick={() => setShowVideo(true)}
          className="text-[#667085] mt-10 underline cursor-pointer"
        >
          Click to see the documentary
        </button>

        {showVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setShowVideo(false)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 z-10 text-white bg-black/60 rounded-full px-3 py-1 hover:bg-black"
              >
                ✕
              </button>

              <iframe
                src={`https://www.youtube.com/embed/m4864IAJd7A`}
                title="Video player"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default NewsOne;
