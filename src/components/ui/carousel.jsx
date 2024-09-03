import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselContext = createContext(undefined);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
}

function CarouselProvider({ children }) {
  const [index, setIndex] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <CarouselContext.Provider
      value={{ index, setIndex, itemsCount, setItemsCount }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

function Carousel({ children, className }) {
  return (
    <CarouselProvider>
      <div className={`group/hover relative ${className || ""}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  );
}

function CarouselNavigation({ className, classNameButton, alwaysShow }) {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div
      className={`pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2 ${
        className || ""
      }`}
    >
      <button
        type="button"
        className={`pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950 ${
          alwaysShow
            ? "opacity-100 disabled:opacity-40"
            : "opacity-0 group-hover/hover:opacity-100 disabled:group-hover/hover:opacity-40"
        } ${classNameButton || ""}`}
        disabled={index === 0}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        <ChevronLeft
          className="stroke-zinc-600 dark:stroke-zinc-50"
          size={16}
        />
      </button>
      <button
        type="button"
        className={`pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950 ${
          alwaysShow
            ? "opacity-100 disabled:opacity-40"
            : "opacity-0 group-hover/hover:opacity-100 disabled:group-hover/hover:opacity-40"
        } ${classNameButton || ""}`}
        disabled={index + 1 === itemsCount}
        onClick={() => {
          if (index < itemsCount - 1) {
            setIndex(index + 1);
          }
        }}
      >
        <ChevronRight
          className="stroke-zinc-600 dark:stroke-zinc-50"
          size={16}
        />
      </button>
    </div>
  );
}

function CarouselIndicator({ className, classNameButton }) {
  const { index, itemsCount, setIndex } = useCarousel();

  return (
    <div
      className={`absolute bottom-0 z-10 flex w-full items-center justify-center ${
        className || ""
      }`}
    >
      <div className="flex space-x-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-opacity duration-300 ${
              index === i
                ? "bg-zinc-950 dark:bg-zinc-50"
                : "bg-zinc-900/50 dark:bg-zinc-100/50"
            } ${classNameButton || ""}`}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselContent({ children, className, transition }) {
  const { index, setIndex, setItemsCount } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const dragX = useMotionValue(0);
  const containerRef = useRef(null);
  const itemsLength = Children.count(children);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter(
        (entry) => entry.isIntersecting
      ).length;
      setVisibleItemsCount(visibleCount);
    }, options);

    const childNodes = containerRef.current.children;
    Array.from(childNodes).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children, setItemsCount]);

  useEffect(() => {
    if (!itemsLength) {
      return;
    }

    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -10 && index < itemsLength - 1) {
      setIndex(index + 1);
    } else if (x >= 10 && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragMomentum={false}
      style={{
        x: dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: "spring",
          duration: 0.2,
        }
      }
      className={`flex cursor-grab items-center active:cursor-grabbing ${
        className || ""
      }`}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}

function CarouselItem({ children, className }) {
  return (
    <motion.div
      className={`w-full min-w-0 shrink-0 grow-0 overflow-hidden ${
        className || ""
      }`}
    >
      {children}
    </motion.div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
};
