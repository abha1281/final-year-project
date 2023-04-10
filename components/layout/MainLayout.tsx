import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div>
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.main
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="leave"
          key={router.route}
          transition={{ opacity: { duration: 0.1 }, y: { duration: 0.3 } }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;

const variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  leave: {
    opacity: 0,
  },
};
