import Hero from "./components/Hero";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
    </main>
  )
}
