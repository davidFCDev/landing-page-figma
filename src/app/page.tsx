import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonial />
    </main>
  )
}
