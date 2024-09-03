import { Cursor } from "../components/ui/cursor";
import Alan from "../assets/Alan.jpg";
import Darmouth from "../assets/Dartmouth-sqr.jpg";
import John from "../assets/John.jpeg";
import Garry from "../assets/Garry.jpg";
import ai from "../assets/ai.jpg";
import eliza from "../assets/eliza.jpg";
import Walter from "../assets/Walter.jpg";
import go from "../assets/go.jpg";

const History = () => {
  return (
    <div>
      <div className="lg:my-10 my-5 lg:mx-24 mx-10">
        <h1 className="font-bold lg:text-3xl text-white">
          HISTORY - TIMESTAMP - SIMULA SA SIMULA
        </h1>
        <p className="mt-5">
          Artificial Intelligence is not just a modern phenomenon but a field
          with deep <span className="text-[#2dd4bf]">historical roots</span>. From ancient philosophical musings about
          machines with human-like thinking to today’s cutting-edge
          technologies, AI has undergone a remarkable evolution. This timeline
          highlights key <span className="text-[#2dd4bf]">milestones</span> that have shaped the development of AI,
          illustrating how <span className="text-[#2dd4bf]">past</span> innovations have paved the way for today’s
          advanced systems.
        </p>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:mx-32 mx-5">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={Walter}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">1940s</time>
              <div className="text-lg font-black">The Early Foundations</div>
              Warren McCulloch and Walter Pitts publish{" "}
              <span className="text-[#2dd4bf]">
                "A Logical Calculus of Ideas Immanent in Nervous Activity,"
              </span>{" "}
              which introduces the concept of artificial neurons, laying the
              groundwork for neural networks.
            </div>
            <hr className="bg-neutral-600" />
          </li>
          <li>
            <hr className="bg-neutral-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={Alan}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">1950s</time>
              <div className="text-lg font-black">The Turing Test </div>Alan
              Turing introduced the{" "}
              <span className="text-[#2dd4bf]">Turing Test</span>, a
              groundbreaking concept to evaluate a machine's ability to exhibit
              intelligent behavior equivalent to a human.
            </div>
            <hr className="bg-neutral-600" />
          </li>
          <li>
            <hr className="bg-neutral-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={Darmouth}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">1956</time>
              <div className="text-lg font-black">Dartmouth Conference </div>The
              Dartmouth Conference is where the term{" "}
              <span className="text-[#2dd4bf]">"Artificial Intelligence"</span>
              was first coined, marking the official start of AI research and
              setting the course for future advancements.
            </div>
            <hr className="bg-neutral-600" />
          </li>
          <li>
            <hr className="bg-neutral-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={eliza}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">1960s</time>
              <div className="text-lg font-black">Early AI Programs </div>
              Joseph Weizenbaum develops{" "}
              <span className="text-[#2dd4bf]">ELIZA</span>, an early natural
              language processing computer program that simulates conversation
              with a therapist.
            </div>
            <hr className="bg-neutral-600" />
          </li>
          <li>
            <hr className="bg-neutral-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={John}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">1980s</time>
              <div className="text-lg font-black">AI Winter</div>
              AI experiences its first "winter," a period of reduced funding and
              interest due to unmet expectations and the{" "}
              <span className="text-[#2dd4bf]">limitations</span> of early AI
              systems. Expert systems, which are computer systems that emulate
              the decision-making ability of a human expert, reach their peak
              before the second AI winter begins.
            </div>
            <hr className="bg-neutral-600" />
          </li>
          <li>
            <hr className="bg-neutral-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={Garry}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">1997</time>
              <div className="text-lg font-black">
                Deep Blue Defeats Kasparov{" "}
              </div>
              <span className="text-[#2dd4bf]">IBM’s Deep Blue</span> defeated
              chess champion{" "}
              <span className="text-[#2dd4bf]">Garry Kasparov</span>, showcasing
              AI’s potential to excel in complex, strategic tasks and capture
              global attention
            </div>
            <hr className="bg-neutral-600" />
          </li>
          <li>
            <hr className="bg-neutral-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={go}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">2010s</time>
              <div className="text-lg font-black">AI Becomes Mainstream</div>
              In the 2010s, AI made major strides with deep learning
              breakthroughs, notably when <span className="text-[#2dd4bf]">DeepMind's AlphaGo</span> defeated world
              champion <span className="text-[#2dd4bf]">Lee Sedol</span> in Go, showcasing AI’s advanced strategic
              capabilities. These advancements significantly integrated AI into
              everyday life, impacting industries from healthcare to finance.
            </div>
            <hr className="bg-neutral-600" />
          </li>
          <li>
            <hr className="bg-neutral-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <img
                  src={ai}
                  alt="Christian Church, Eastern Europe"
                  className="h-40 w-40"
                />
              </Cursor>
              <time className="font-mono italic">2020s</time>
              <div className="text-lg font-black">AI Today and Beyond</div>
              OpenAI releases <span className="text-[#2dd4bf]">GPT-3</span>, a state-of-the-art language model capable
              of generating human-like text, sparking discussions about AI's
              potential and ethical implications.
            </div>
            <hr className="bg-neutral-600" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default History;
