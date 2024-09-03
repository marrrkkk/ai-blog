import ai from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.avif";
import ai4 from "../assets/ai4.avif";
import ai5 from "../assets/ai5.avif";
import { AnimatedGroup } from "../components/ui/animatedGroup";
import AnimatedBackground from "../components/ui/animatedBackground";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const ITEMS = [
    {
      id: 1,
      title: "Generative AI",
      description: "Transforms creative processes across industries.",
      url: "https://www.techtarget.com/searchenterpriseai/definition/generative-AI",
    },
    {
      id: 2,
      title: "Multimodal AI",
      description: "Integrates text, image, and video analysis seamlessly.",
      url: "https://cloud.google.com/use-cases/multimodal-ai",
    },
    {
      id: 3,
      title: "Agentic AI",
      description: "Autonomous systems making real-time decisions.",
      url: "https://www.ssonetwork.com/intelligent-automation/articles/what-is-agentic-ai",
    },
    {
      id: 4,
      title: "Facial Recognition",
      description: "Advances in secure and personalized experiences.",
      url: "https://www.kaspersky.com/resource-center/definitions/what-is-facial-recognition",
    },
    {
      id: 5,
      title: "AI-Powered Healthcare",
      description: "Enhances diagnostics and treatment plans.",
      url: "https://builtin.com/artificial-intelligence/artificial-intelligence-healthcare",
    },
    {
      id: 6,
      title: "AI in Autonomous Vehicles",
      description: "Enables safer and more efficient transportation.",
      url: "https://www.techtarget.com/searchenterpriseai/definition/driverless-car",
    },
  ];

  return (
    <div>
      <div className="space-y-10 lg:mx-24 mx-5 my-10">
        <h1 className="font-extrabold text-5xl text-white">
          Discovering{" "}
          <span className="text-[#2dd4bf]">Artificial Intelligence</span>
        </h1>
        <AnimatedGroup
          className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4"
          preset="scale"
        >
          <img
            src={ai}
            alt="impressionist painting, uploaded to Cosmos"
            className="h-[90%] w-full rounded-[4px]"
          />
          <img
            src={ai3}
            alt="impressionist painting, uploaded to Cosmos"
            className="h-[90%] w-full rounded-[4px]"
          />
          <img
            src={ai4}
            alt="impressionist painting, uploaded to Cosmos"
            className="h-[90%] w-full rounded-[4px]"
          />
          <img
            src={ai5}
            alt="impressionist painting, uploaded to Cosmos"
            className="h-[90%] w-full rounded-[4px]"
          />
        </AnimatedGroup>
        <p className="text-right lg:ml-[60%]">
          In the rapidly evolving world of Artificial Intelligence, staying
          informed is key to staying ahead. This section is your gateway to the
          latest breakthroughs, cutting-edge research, and industry-shaking
          announcements. Here, we don’t just report on AI—we bring you the pulse
          of innovation as it happens.
        </p>
      </div>
      <hr className="border-neutral-700" />
      <div className="">
        <h1 className="ml-10 mt-20 font-normal text-3xl text-white">
          What's New in <span className="text-[#2dd4bf]">AI</span>
        </h1>
        <div className="grid grid-cols-2 p-10 md:grid-cols-3">
          <AnimatedBackground
            className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {ITEMS.map((item, index) => (
              <div key={index} data-id={`card-${index}`}>
                <a href={item.url} target="_blank">
                  <div className="flex select-none flex-col space-y-1 p-4">
                    <h3 className="text-base font-medium text-[#2dd4bf]">
                      {item.title}
                    </h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold lg:text-2xl text-xl mt-10 mb-5 text-[#2dd4bf]">
          AI is Here, and It’s Happening Now
        </h1>
        <p className="lg:w-[50%] w-[90%]">
          This is your front-row seat to the AI revolution. Don’t just observe
          the future—be part of it. Dive into our AI News & Updates and stay
          connected to the innovations that are shaping our world, one algorithm
          at a time.
        </p>
      </div>
      <div className="mx-10 mt-20">
        <h1 className="font-semibold lg:text-2xl text-xl">FAQ About Artificial Intelligence</h1>
        <Accordion
          className="flex w-full flex-col"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          variants={{
            expanded: {
              opacity: 1,
              scale: 1,
            },
            collapsed: {
              opacity: 0,
              scale: 0.7,
            },
          }}
        >
          <AccordionItem value="getting-started" className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
                <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                  What is Artificial Intelligence (AI)?
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                Artificial Intelligence (AI) refers to the simulation of human
                intelligence in machines that are programmed to think, learn,
                and perform tasks that typically require human intelligence.
                These tasks include problem-solving, understanding natural
                language, and recognizing patterns.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="animation-properties" className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
                <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                  How does AI work?
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                AI works through various techniques such as machine learning,
                where algorithms improve their performance based on experience
                and data. It involves training models on large datasets to
                recognize patterns, make predictions, and automate decisions.
                Common AI methods include neural networks, decision trees, and
                reinforcement learning.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="advanced-features" className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
                <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                  How is AI being regulated?
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                AI regulation is an evolving field, with various governments and
                organizations working on frameworks to ensure ethical and safe
                use. Regulations often focus on transparency, accountability,
                and ensuring that AI systems do not perpetuate bias or
                discrimination.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="community-support" className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
                <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                  What is the future of AI?
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                The future of AI holds promise for significant advancements in
                various sectors. It is expected to lead to more sophisticated
                and autonomous systems, improvements in human-computer
                interaction, and novel solutions to global challenges. However,
                it will also require careful consideration of ethical
                implications and societal impacts.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;
