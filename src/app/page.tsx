'use client'
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
    <main className="w-full min-h-screen ">
      <Nav />
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonial />
      <Logos />
      <Team />
      <Footer />
    </main>
  )
}
