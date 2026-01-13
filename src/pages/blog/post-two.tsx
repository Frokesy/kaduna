import Container from '../../components/defaults/Container';
import Footer from '../../components/defaults/Footer';
import Header from '../../components/defaults/Header';
import Newsletter from '../../components/home/Newsletter';

const PostTwo = () => {
  return (
    <Container>
      <Header color="black" />
      <img
        src="/assets/blog-imgs/img-two.jpg"
        alt="blog-img"
        className="w-full"
      />

      <div className="w-[90vw] mx-auto lg:my-20 my-10">
        <h1 className="lg:text-[48px] text-[36px] text-[#101828] font-semibold">
          Peace beyond 2011
        </h1>
        <div className="flex items-center space-x-4 mt-8">
          <img
            src="/assets/hero-imgs/img-three.png"
            alt="blog-img"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="">
            <h3 className="text-[#101828] text-[18px] font-semibold">
              Josiah Idowu-Fearon, Ph.D (ABU)
            </h3>
            <p className="text-[#667085]">20 Jan, 2025</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#f1f1f1] py-10">
        <div className="lg:w-[80vw] w-[90vw] mx-auto space-y-6 text-[#667085]">
          <h2 className="lg:text-[30px] text-[20px] font-semibold text-[#000000]">
            General Elections
          </h2>
          <p>
            As Nigerians go to the polls from Saturday the 2nd of April, it is
            necessary to give a thought to the need for Nigeria to survive and
            play her vital and influential roles with the other leading nations
            of the world after the elections are over. Nigeria has all that it
            takes to play these roles on the African continent and at the United
            Nations, for her to play leading roles within these two spheres, she
            must remain in peace and her citizens must have a sense of security.
            These two essentials- peace and a sense of security- therefore need
            to be on the mind of every Nigerian who is registered to vote as he
            or she exercises his or her voting rights at these general elections
            slated for the next three weekends starting from the second of April
            this year.
          </p>
          <h2 className="lg:text-[30px] text-[20px] uppercase font-semibold text-[#000000]">
            Let us have peace!
          </h2>
          <p>
            Peace is a non-negotiable essential in Nigeria with her religious
            and ethnic differences. Our experiences have not been encouraging as
            these two aspects of our communal and corporate existence have often
            been used as reasons for the destruction of lives and property in
            the country at large and the northern states in particular. The role
            religion has played and still playing in the ongoing elections is
            also a reason for voters to be careful as they cast their votes for
            those wanting to lead us for the next four years. In the light of
            this, Nigerian eligible voters are being called upon to vote for men
            and women who will not only promise to work for peace and peaceful
            coexistence among Nigerians, but leaders who will practically work
            for peace while in office and give Nigerians a sense of belonging.
          </p>
          <p>
            In the light of the above, it is necessary to weigh very carefully
            each of the candidates seeking for national offices like the
            Presidency of the Federal Republic of Nigeria in particular. It is
            the opinion of this writer that in order to give the two major
            religious communities in the country a sense of belonging and also
            the opportunity to make useful contributions to governance, should
            the presidential candidate be a Christian, his Vice Presidential
            candidate must be a Muslim. The desire to have both candidates
            coming from the same religious community is not healthy and it is
            very likely to be a source of unforeseen disasters in the near
            future. Similarly, any presidential candidate and the running mate
            must not be religious leaders with their own congregations. Such a
            candidate already has a constituency and the effort to remain
            neutral in governance would also look unhealthy, pretentious and
            hypocritical.
          </p>
          <p>
            There are those who would refer to countries where this factor is a
            non-issue, that would be good for such countries but in the light of
            Nigeria being unique in terms of her religious mix between Islam and
            Christianity, such a practice will not work and it would be
            perceived as a deliberate plan to make governance impossible. To put
            it bluntly, Christian-Christian or Muslim-Muslim candidate will not
            and cannot work in Nigeria for now! Furthermore, it unhealthy for
            any religious or traditional leader to seek for a national political
            position in Nigeria today, it is divisive.
          </p>
          <p>
            This recommendation to have both the executive and his vice from
            each of the two communities is also recommended for some states
            within the federation that have an almost equal number of both the
            Christian and Muslim communities like Kaduna, Niger, Plateau, Kwara,
            Kogi, Oyo, Lagos, Ogun and a few others. Nigeria has suffered enough
            from crises that often wear a religious facade though research has
            shown that the factors are multiple-faceted, they are a combination
            of economic, ethnic and religious principally. As the government
            make every effort to provide security, encourage development and
            improve the living standards of the country, the electorate must
            prevent decisions that will work against these good intentions. The
            electorate must, as a sign of civic responsibility, cast their votes
            for the presidential and gubernatorial positions representatives
            from the two main religious communities that make up over 90% of the
            population of this nation. This, it seems to me is a way of giving
            Nigerian Muslims and Christians a sense of belonging and an
            opportunity to be stakeholders in the government of the day. This is
            a positive and honest way of moving Nigeria forward in peace and
            prosperity.
          </p>
          <p>
            I have one vote for each of these two sensitive positions in our
            country, this vote will be cast for the presidential and
            gubernatorial candidates who will give me a sense of belonging,
            promote peace and peaceful coexistence between my Muslim neighbour
            and I and also promote a spirit of respect and acceptance between
            and among the various ethnic groups within the country. I call on
            all eligible voters in the country to pray, weigh the points made in
            this article and vote for the unity, progress and stability of our
            dear country by casting their votes for those who will give them a
            sense of belonging, participation in governance and a sense of
            security.
          </p>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default PostTwo;
