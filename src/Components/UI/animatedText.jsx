/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAnimate, motion, delay, stagger } from "motion/react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const AnimationFn = () => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      { duration: 0.5, delay: stagger(0.01) },
    );
  };

  const text =
    "Agentic AI refers to AI systems that can independently plan, decide, and act toward a goal rather than just responding to prompts. These systems use reasoning, memory, and tools to break tasks into steps, adapt to feedback, and execute actions autonomously. In short, agentic AI shifts AI from passive assistants to proactive problem-solvers.";

  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-900 bg-[radial-gradient(#262626_1px,transparent_1px)] bg-size-[10px_10px] text-white">
      <div ref={scope} className="max-w-4xl text-2xl font-bold">
        <button
          className="mb-2 cursor-pointer rounded-full border-2 border-neutral-600 px-3 py-1 ring-neutral-600 transition duration-300 hover:ring-2 active:scale-90 active:text-neutral-400"
          onClick={() => AnimationFn()}
        >
          Click to Know What is Agentic AI
        </button>
        <br />
        {text.split("").map((word, index) => (
          <motion.span
            key={index}
            style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
