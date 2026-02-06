/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { features } from "./Feature";
import { AnimatePresence, motion } from "motion/react";

// If User Click Outside The Card Then Card will be closed
const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

export const MotionLayout = () => {
  const [current, setCurrent] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useOutsideClick(() => setCurrent(null));

  return (
    <AnimatePresence>
      <div className="relative min-h-screen w-full bg-neutral-900 bg-[radial-gradient(#262626_1px,transparent_1px)] bg-size-[10px_10px] py-20 text-white">
        {/* Overlay */}
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"
          ></motion.div>
        )}

        {/* Card */}
        {current && (
          <motion.div
            layoutId={`card-${current.id}`}
            ref={ref}
            className="fixed top-1/2 left-1/2 z-50 h-fit w-80 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-neutral-700 bg-neutral-900 p-4 shadow-xl"
          >
            <motion.img
              src={current.src}
              alt={current.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: imageLoaded ? 1 : 0,
                scale: imageLoaded ? 1 : 0.95,
              }}
              transition={{ duration: 0.3 }}
              className="h-60 w-full rounded-xl object-cover"
              style={{ willChange: "transform, opacity" }}
            />

            <div className="mt-4 space-y-2">
              <motion.h2
                layoutId={`title-${current.id}`}
                className="text-lg font-semibold text-white"
              >
                {current.title}
              </motion.h2>

              <motion.p
                layoutId={`desc-${current.id}`}
                className="text-sm text-neutral-300"
              >
                {current.description}
              </motion.p>

              <button
                onClick={() => setCurrent(null)}
                className="mt-4 w-full cursor-pointer rounded-lg bg-red-500 py-2 text-sm font-medium transition hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        {/* Featured List */}
        <div className="mx-auto w-full max-w-lg space-y-2">
          {features.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              className="flex items-center justify-between rounded-lg bg-neutral-800/60 p-4 transition hover:bg-neutral-800"
            >
              <div className="flex items-center gap-4">
                <motion.img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  initial={{ opacity: 0.8, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-20 w-20 rounded-lg object-cover"
                  style={{ willChange: "transform, opacity" }}
                />

                <div>
                  <motion.h2
                    layoutId={`title-${item.id}`}
                    className="text-lg font-semibold text-white"
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    layoutId={`desc-${item.id}`}
                    className="text-sm text-neutral-300"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>

              <button
                onClick={() => {
                  setImageLoaded(false); // reset for modal fade-in
                  setCurrent(item);
                }}
                className="ml-4 cursor-pointer rounded-lg bg-green-500 px-4 py-2 text-sm font-medium transition hover:bg-green-600"
              >
                Open
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};
