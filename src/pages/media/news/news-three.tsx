import Container from '../../../components/defaults/Container';
import Footer from '../../../components/defaults/Footer';
import Header from '../../../components/defaults/Header';
import Newsletter from '../../../components/home/Newsletter';

const NewsThree = () => {
  return (
    <Container>
      <Header color="black" />

      <div className="lg:w-[80vw] w-[90vw] mx-auto my-10">
        <img
          src="/assets/blog-img-three.png"
          alt="blog-img"
          className="w-full lg:h-130 object-cover"
        />
        <h1 className="lg:text-[48px] text-[36px] mt-10 text-[#101828] font-semibold">
          KCSCMR holds their 2017 graduation ceremony
        </h1>
        <p className="text-[#667085]">08 Apr, 2017</p>

        <div className="border-t-2 border-[#f1f1f1] py-10 mt-10">
          <div className="space-y-6 text-[#667085]">
            <p>
              The Kaduna Centre for the Study of Christian-Muslim Relations,
              today hold their graduation ceremony. It was reported that the
              Kaduna centre was founded by Most Rev. Dr. Josiah Idowu Fearon,
              former Bishop of Kadunna, now Secretary General of Anglican
              Communion.
            </p>
            <p>
              The ceremony had in attendance Malam Nasir el Rufai, the executive
              governor of Kadunna state, Sheikh Ahmad Gumi, and other prominent
              personalities.
            </p>
            <p>
              Speaking at the occasion, Rev. Dr. Josiah said that Gov. Elrufai
              is a Muslim, but not a Muslim governor. This he said was because
              of El-Rufai’s commitments toward the growth and development of
              christian families in the northern region.
            </p>
            <p>
              He reiterated Elrufai’s commitment in making Kadunna state a
              peace, loving and economic vibrant state. Speaking also on the
              challenges in the northern part of the country, Sheikh Amad said
              “Northern Nigerians problems are poverty and ignorance.”
            </p>
            <p>
              Culled from
              <a
                target="_blank"
                href="https://www.vanguardngr.com/2017/04/gov-elrufai-muslim-not-muslim-governor/"
                className="text-blue-600 ml-1"
              >
                https://www.vanguardngr.com/2017/04/gov-elrufai-muslim-not-muslim-governor/
              </a>
            </p>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default NewsThree;
