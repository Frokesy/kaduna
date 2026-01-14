import Container from '../../../components/defaults/Container';
import Footer from '../../../components/defaults/Footer';
import Header from '../../../components/defaults/Header';
import Newsletter from '../../../components/home/Newsletter';

const NewsTwo = () => {
  return (
    <Container>
      <Header color="black" />

      <div className="lg:w-[80vw] w-[90vw] mx-auto my-10">
        <img
          src="/assets/hero-imgs/img-three.png"
          alt="blog-img"
          className="w-full lg:h-130 object-cover"
        />
        <h1 className="lg:text-[48px] text-[36px] mt-10 text-[#101828] font-semibold">
          Bishop Fearon named to head Kaduna Peace Commission
        </h1>
        <p className="text-[#667085]">17 Sept, 2017</p>

        <div className="border-t-2 border-[#f1f1f1] py-10 mt-10">
          <div className="space-y-6 text-[#667085]">
            <p>
              An Anglican cleric, Josiah Idowu-Fearon, is to head the Kaduna
              State Peace Commission. The nomination of the former Archbishop of
              Kaduna was announced on Thursday in Kaduna.
            </p>
            <p>
              A government statement, signed by Samuel Aruwan (SSA-Media &
              Publicity) disclosed that Governor Nasir El-Rufai has forwarded
              the names of four persons to constitute the leadership of the
              Peace Commission. The law establishing the commission was recently
              passed.
            </p>
            <p>
              “Governor Nasir Ahmad El-Rufai has sent nominations for membership
              of the Peace Commission to the Kaduna State House of Assembly.
              Malam Nasir El-Rufai nominated the Most Reverend Josiah
              Idowu-Fearon as chairman and Priscilla Yachat Ankut as executive
              vice-chairman/chief executive. Dr. Saleh Bashayi Momale and Hajiya
              Khadijah Hawaja Gambo are nominated as permanent commissioners.
            </p>
            <p>
              “Dr. Josiah Idowu-Fearon is the Secretary-General of the worldwide
              Anglican Communion, based in the United Kingdom. He is the
              immediate past Archbishop of the Kaduna Archdiocese of the
              Anglican Church, and also a former Bishop of Sokoto. Idowu-Fearon
              is a household name in peace advocacy and inter-religious harmony
              in Nigeria. He established the Kaduna Center for the Study of
              Christian-Muslim Relations. He holds degrees in theology,
              sociology, Arabic and Islamic studies from universities in
              Nigeria, the United Kingdom and the Kingdom of Jordan.
            </p>
            <p>
              “Ankut is an expert in democratic governance, with specific
              experience in human rights, inclusive political processes, justice
              sector reform, conflict prevention and peace building.
            </p>
            <p>
              Her country experience spans South Africa, Gambia, Rwanda, Malawi
              and Nigeria where she has supported democratisation processes in
              various capacities. Ankut worked with the United Nations
              Development Programme (UNDP) in Malawi as the Technical Specialist
              in Democratic Accountability where she supported the Government of
              Malawi to develop a robust democratic governance sector strategy
              as part of its reform agenda. In Nigeria, she works with the
              Nigeria Stability and Reconciliation Programme (NSRP), DFID’s
              largest peace-building support programme, where she has
              successfully facilitated dialogue and reconciliation in
              communities affected by violent conflict across the country. She
              holds an LL.M from the University of Pretoria, South Africa. She
              studied law at the Ahmadu Bello University, Zaria.
            </p>
            <p>
              “Dr. Momale is a development Geographer at the Centre for Dryland
              Agriculture, Bayero University, Kano. He holds a doctorate degree
              in Geography. He is a former Executive Director of The Pastoral
              Resolve, a non-governmental organization working in the areas of
              pastoralists’ education, conflict management and pastoral resource
              development in Nigeria.
            </p>
            <p>
              “Hajiya Gambo is a gender rights activist, social entrepreneur and
              conflict resolution expert active in Plateau and neighbouring
              states. She has been involved in several peace initiatives
              facilitated by the Geneva-based Center for Humanitarian Dialogue
              (HD).”
            </p>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default NewsTwo;
