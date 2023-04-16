import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

import MobileNav from "@/components/MobileNav";
import Project from "@/components/Project";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";

import React from "react";
import Hero from "@/components/Hero";

type Props = {};

function index({}: Props) {
  return (
    <div className="font-Inter900   ">
      <Head>
        <title>Jabbars Portfolio</title>
      </Head>

      <MobileNav />
      <Header />

      <section id="hero"></section>

      <section id="Hero">
        <Hero />
      </section>

      <section id="About">
        <About />
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
