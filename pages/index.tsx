import About from "@/components/About";
import Contact from "@/components/Contact";

import MobileNav from "@/components/MobileNav";
import Project from "@/components/Project";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";
import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";

import { MyContext } from "@/components/ContextProvider";

import Hero2 from "@/components/Hero2";
import Header2 from "@/components/Header2";
import Skills from "@/components/Skills";
import Start from "@/components/Start";

type Props = {};

function index({}: Props) {
  const context = useContext(MyContext);

  if (!context) {
    // Handle the case when the context is undefined
    return <div>Loading...</div>;
  }

  const { loaded } = context;

  return (
    <div>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-Inter900 overflow-x-hidden bg-gray-900 text-white"
          >
            <Start />
          </motion.div>
        )}
      </AnimatePresence>

      {loaded && (
        <div className="font-Inter900 overflow-x-hidden bg-gray-900 text-white   ">
          <MobileNav />
          <Header2 />
          <section id="Hero">
            <Hero2 />
          </section>
          <section id="About">
            <About />
          </section>
          <section id="Skills">
            <Skills />
          </section>
          <section id="Projects">
            <Project />
          </section>
          <section id="Testimonials">
            <Testimonials />
          </section>
          <section id="Contact">
            <Contact />
          </section>
        </div>
      )}

      <Head>
        <title>Jabbars Portfolio</title>
      </Head>
    </div>
  );
}

export default index;
