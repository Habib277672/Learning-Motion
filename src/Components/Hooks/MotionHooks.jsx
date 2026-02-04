/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import features from "../../JSON/features.json";
import { IoRocketOutline } from "react-icons/io5";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

export const MotionHooks = () => {
  // const backgrounds = ["#555555", "#696969", "#2A3439", "#36454F", "#353839"];
  // const [background, setBackground] = useState(backgrounds[0]);

  // const containerRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start center", "end center"],
  // });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   const finalValue = Math.floor(latest * background.length);
  //   setBackground(backgrounds[finalValue]);
  // });

  return (
    <motion.div
      // ref={containerRef}
      // style={{ background }}
      transition={{ duration: 300, ease: "easeInOut" }}
      className="flex min-h-screen justify-center bg-neutral-900 text-white"
    >
      <Features />
    </motion.div>
  );
};

const Features = () => {
  return (
    <div className="flex max-w-5xl gap-10">
      <TextCard />
      <ImageCard />
    </div>
  );
};

// Text Section

const TextCard = () => {
  return (
    <div className="w-1/2">
      {features.map((item) => (
        <FeatureText key={item.id} item={item} />
      ))}
    </div>
  );
};

const FeatureText = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 12]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <section ref={ref} className="flex min-h-screen items-center">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          opacity,
          scale,
        }}
        className="flex flex-col gap-4"
      >
        <IoRocketOutline className="text-2xl" />
        <h2 className="text-4xl font-semibold">{item.title}</h2>
        <p className="max-w-md text-neutral-400">{item.description}</p>
      </motion.div>
    </section>
  );
};

// Image Section

const ImageCard = () => {
  return (
    <div className="w-1/2">
      {features.map((item) => (
        <FeatureImage key={item.id} src={item.src} />
      ))}
    </div>
  );
};

const FeatureImage = ({ src }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 40]), {
    stiffness: 200,
    dumping: 30,
    mass: 1,
  });
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 12]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={ref} className="flex min-h-screen items-center">
      <motion.img
        style={{
          y,
          scale,
          opacity,
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        src={src}
        alt=""
        draggable={false}
        className="rounded-lg"
      />
    </section>
  );
};
