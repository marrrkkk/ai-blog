import Card from "../components/Card";
import Alan from "../assets/Alan_Turing.jpg";
import JMC from "../assets/JMC.jpg";
import Marvin from "../assets/Marvin.jpeg";
import Herbert from "../assets/Herbert.jpg";
import Geoffrey from "../assets/Geoffrey.jpg";
import Yoshua from "../assets/Yoshua.jpeg";
import Yann from "../assets/Yann.jpg";

const People = () => {
  return (
    <div>
      <div className="lg:mx-24 mx-10 my-10">
        <h1 className="font-bold lg:text-3xl text-white">
          GET TO KNOW US - PEOPLE INVOLVED IN THE FORMATION OF AI
        </h1>
        <p className="mt-5">
          Artificial Intelligence has been shaped by the contributions of many
          <span className="text-[#2dd4bf]"> brilliant minds</span>. This section
          introduces you to some of the key <span className="text-[#2dd4bf]">figures</span> whose pioneering work has
          been instrumental in developing <span className="text-[#2dd4bf]">AI</span> from its conceptual beginnings to
          the advanced technologies of today.
        </p>
      </div>
      <div className="lg:mx-48 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        <Card
          img={Alan}
          title={"Alan Turing"}
          sub={"Computer scientist"}
          description={
            "Often regarded as the father of computer science, Alan Turing was a visionary who proposed the concept of a machine capable of simulating human intelligence. His introduction of the Turing Test remains a fundamental benchmark for evaluating a machine's ability to exhibit intelligent behavior."
          }
        />
        <Card
          img={JMC}
          title={"John McCarthy"}
          sub={"Computer scientist"}
          description={
            "John McCarthy is credited with coining the term 'Artificial Intelligence' and organizing the 1956 Dartmouth Conference, which is considered the birth of AI as a research field. His efforts laid the foundation for many of the AI concepts and research directions we follow today."
          }
        />
        <Card
          img={Marvin}
          title={"Marvin Minsky"}
          sub={"Computer scientist"}
          description={
            "A leading figure in AI and cognitive science, Marvin Minsky co-founded the MIT Media Lab and made significant contributions to understanding and replicating human cognitive processes. His work has profoundly influenced the development of AI theories and applications."
          }
        />
        <Card
          img={Herbert}
          title={"Herbert A. Simon"}
          sub={"Political scientist"}
          description={
            "Herbert A. Simon was a pioneer in developing early AI programs and theories related to decision-making processes. His research in cognitive psychology and artificial intelligence has had a lasting impact on the field."
          }
        />
        <Card
          img={Geoffrey}
          title={"Geoffrey Hinton"}
          sub={"Computer scientist"}
          description={
            "Known as the 'godfather of deep learning', Geoffrey Hinton made groundbreaking advancements in neural networks and deep learning algorithms. His research has been crucial in the development of modern AI systems, driving forward the capabilities of machine learning."
          }
        />
        <Card
          img={Yoshua}
          title={"Yoshua Bengio"}
          sub={"Computer scientist"}
          description={
            "Yoshua Bengio, along with Geoffrey Hinton and Yann LeCun, is a prominent figure in deep learning research. His work on neural networks has greatly advanced our understanding and application of AI technologies."
          }
        />
        <Card
          img={Yann}
          title={"Yann LeCun"}
          sub={"Computer scientist"}
          description={
            "Yann LeCun is renowned for his development of convolutional neural networks (CNNs), which have revolutionized computer vision and other AI applications. His contributions have played a significant role in the advancement of AI technology."
          }
        />
      </div>
    </div>
  );
};

export default People;
