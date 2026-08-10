import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Contact />
      </main>
    </div>
  );
}
