import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import HelperTemplate from "./HelperTemplate";
import SearchBar from "./SearchBar";

type Props = {};

const NavBar = (props: Props) => {
  let pathname = usePathname() || "/";

  return (
    <div className="bg-cyan-50">
      <HelperTemplate>
        <div className="flex justify-between items-center py-2">
          <span className="text-cyan-800 text-2xl font-medium">
            <span className="text-cyan-900 font-bold">Maldives</span> History
          </span>
          <SearchBar />
          <div className="flex gap-x-2.5">
            {navList.map(nav => (
              <Link
                key={nav.link}
                href={nav.link}
                className={`relative px-3 py-2 font-medium text-sm transition-colors ${
                  pathname === nav.link ? "text-cyan-500" : "text-cyan-900"
                }`}
              >
                {nav.name}
                <AnimatePresence mode="wait">
                  {pathname === nav.link ? (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 3 }}
                      exit={{ height: 0 }}
                      className="absolute inset-x-0 bottom-0 bg-cyan-500 rounded-t-md"
                    />
                  ) : null}
                </AnimatePresence>
              </Link>
            ))}
          </div>
        </div>
      </HelperTemplate>
    </div>
  );
};

export default NavBar;

const navList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Explore",
    link: "/explore",
  },
  {
    name: "Sites",
    link: "/sites",
  },
  {
    name: "People",
    link: "/people",
  },
  {
    name: "Culture",
    link: "/culture",
  },
  {
    name: "Language",
    link: "/language",
  },
];
