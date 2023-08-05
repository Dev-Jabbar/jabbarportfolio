import About from "@/components/About";
import Contact from "@/components/Contact";

import MobileNav from "@/components/MobileNav";
import Project from "@/components/Project";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";

import React from "react";

import Hero2 from "@/components/Hero2";
import Header2 from "@/components/Header2";
import Skills from "@/components/Skills";

type Props = {};

function index({}: Props) {
  return (
    <div className="font-Inter900 overflow-x-hidden bg-gray-900 text-white   ">
      <Head>
        <title>Jabbars Portfolio</title>
      </Head>

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
  );
}

export default index;
