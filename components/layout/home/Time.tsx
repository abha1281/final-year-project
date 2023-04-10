import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  year: string;
  event: string;
  isEven?: boolean;
};

const Time = ({ year, event, isEven = false }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="h-20 w-2 bg-cyan-900" />
      <div className="relative">
        <div className="h-10 w-10 bg-gray-500 rounded-full cursor-pointer" />
        <AnimatePresence>
          {isInView ? (
            <motion.div
              className={`absolute -top-5 ${isEven ? "left-16" : "right-16"}`}
              initial={{ opacity: 0, x: isEven ? 12 : -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isEven ? 12 : -12 }}
              transition={{duration: 0.5}}
            >
              <div className="h-max p-4 rounded-lg w-80 space-y-1 shadow-lg ring-gray-300 bg-white">
                <p className="text-sm font-medium text-cyan-900">Year {year}</p>
                <p className="text-xs font-medium text-cyan-700">{event}</p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Time;
