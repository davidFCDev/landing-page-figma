import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
      <Services />
    </main>
  )
}
