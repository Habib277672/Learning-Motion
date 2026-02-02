import React from "react";
import { motion } from "motion/react";

export const Button = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-900 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[10px_10px] perspective-distant transform-3d">
      <motion.button
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: [0, 50, 0, 50, 0],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileTap={{
          scaleX: -2,
          scaleY: -2,
        }}
        whileHover={{
          rotate: [0, 50, 0, 50, 0],
        }}
        className="group relative cursor-pointer rounded-lg bg-black px-10 py-4 text-neutral-500 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        <span className="transition duration-200 group-hover:text-cyan-400">
          Subscribe
        </span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-2 w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};
