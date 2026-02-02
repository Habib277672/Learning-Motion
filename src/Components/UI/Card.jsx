import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { LuMessageSquareText } from "react-icons/lu";
import { TbHours24 } from "react-icons/tb";
import { TbView360Number } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { MdDevicesOther } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";

export const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex h-142 min-h-124 w-90 flex-col rounded-xl bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold">Acternity UI Components</h2>
            <p className="text-md mt-2 text-neutral-600">
              A Collection of Beautiful UI Components, Let's get on with it.
            </p>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="text-md mt-4 flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 font-mono tracking-tighter shadow-sm"
              >
                <img
                  src="logo.png"
                  className="h-4 w-4"
                  width={50}
                  height={50}
                />
                Panda UI
                <RxCrossCircled className="h-4 w-4 text-neutral-400" />
              </button>
            </div>

            <div className="relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-100">
              {/* Motion Divs */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="abosolute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white"
              >
                {/* First Row */}
                <div className="flex gap-2 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 shadow-md">
                    <LuMessageSquareText className="h-5 w-5 text-neutral-800" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-neutral-600">
                      Acternity UI Components
                    </p>
                    <p className="mt-1 text-[12px] text-neutral-400">
                      A Collection of UI Components.
                    </p>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-2 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 shadow-md">
                    <TbHours24 className="h-4 w-4 text-neutral-800" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-neutral-600">
                      24 Hours turnaround
                    </p>
                    <p className="mt-1 text-[12px] text-neutral-400">
                      Super Fast Delivery at warp speed.
                    </p>
                  </div>
                </div>

                {/* Third Row */}
                <div className="flex gap-2 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 shadow-md">
                    <TbView360Number className="h-5 w-5 text-neutral-800" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-neutral-600">
                      360 Days All Around
                    </p>
                    <p className="mt-1 text-[12px] text-neutral-400">
                      We're Here to help you 24/7.
                    </p>
                  </div>
                </div>

                {/* Fourth Row */}
                <div className="flex gap-2 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 shadow-md">
                    <MdDevicesOther className="h-5 w-5 text-neutral-800" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-neutral-600">
                      Some Other Components
                    </p>
                    <p className="mt-1 text-[12px] text-neutral-400">
                      Here goes another Subtitle.
                    </p>
                  </div>
                </div>

                {/* Cta Btn */}
                <div className="flex cursor-pointer items-center justify-center gap-2 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white shadow-md">
                    <FaPlus className="h-5 w-5 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mt-1 text-sm font-bold text-neutral-600">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Motion Divs End Here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
