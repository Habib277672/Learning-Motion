/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Home, BarChart2, Users, Settings, ChevronLeft } from "lucide-react";
import { motion } from "motion/react";

const sidebarVariants = {
  open: {
    width: "16rem",
    transition: { duration: 0.4 },
  },
  closed: {
    width: "5rem",
    transition: { duration: 0.4 },
  },
};

// const parentVarients = {
//   open: {
//     transition: { staggerChildren: 0.7, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.5, delayChildren: -1 },
//   },
// };

// const childVarients = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
//   closed: {
//     opacity: 0,
//     y: -10,
//     transition: {
//       duration: 0.3,
//     },
//   },
// };

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial="closed"
      animate={open ? "open" : "closed"}
      className="h-screen overflow-hidden"
    >
      <motion.aside
        variants={sidebarVariants}
        className="h-screen overflow-hidden bg-white"
      >
        {/* Toggle */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
          >
            <ChevronLeft
              className={`transition-transform duration-300 ${
                open ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2 px-3">
          <Item icon={<Home />} label="Dashboard" open={open} />
          <Item icon={<BarChart2 />} label="Analytics" open={open} />
          <Item icon={<Users />} label="Users" open={open} />
          <Item icon={<Settings />} label="Settings" open={open} />
        </nav>
      </motion.aside>
    </motion.div>
  );
};

const Item = ({ icon, label, open }) => (
  <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
    <span className="text-xl">{icon}</span>
    {open && <span className="text-sm font-medium">{label}</span>}
  </div>
);

export default Sidebar;
