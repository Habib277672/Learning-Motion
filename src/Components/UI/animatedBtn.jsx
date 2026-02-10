/* eslint-disable no-unused-vars */
import React from "react";
import { useAnimate, motion } from "motion/react";
import { TiTick } from "react-icons/ti";

export const AnimatedBtn = () => {
  const [scope, animate] = useAnimate();

  const sequence = [
    [".text", { opacity: 0 }, { duration: 0.1 }],
    ["button", { width: "0rem" }, { duration: 0.3, ease: "easeInOut" }],
    [
      ".spining-circle",
      { opacity: 1, scale: [0, 1.2, 0.9, 1] },
      { duration: 0.6 },
    ],
  ];

  const AnimateFn = async () => {
    await animate(sequence);

    // await animate(".text", { opacity: 0 }, { duration: 0.1 });

    // await animate(
    //   "button",
    //   { width: "0rem" },
    //   { duration: 0.3, ease: "easeInOut" },
    // );

    // await animate(
    //   ".spining-circle",
    //   { opacity: 1, scale: [0, 1.2, 0.9, 1] },
    //   { duration: 0.6 },
    // );
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-900 bg-[radial-gradient(#262626_1px,transparent_1px)] bg-size-[10px_10px] text-white">
      <div ref={scope} className="flex items-center justify-center">
        <motion.button
          onClick={() => AnimateFn()}
          style={{ width: "15rem", height: "4rem" }}
          className="mx-auto flex cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-purple-500 via-violet-600 to-indigo-500 text-xl font-medium transition duration-300 outline-none active:scale-90"
        >
          <span className="text">Purchase Now $60</span>
        </motion.button>

        <motion.div
          className="spining-circle flex h-20 w-20 items-center justify-center rounded-full bg-green-500"
          initial={{ opacity: 0, scale: 0 }}
        >
          <TiTick className="text-5xl text-white" />
        </motion.div>
      </div>
    </div>
  );
};
