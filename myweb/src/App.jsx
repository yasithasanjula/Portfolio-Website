import BlurBackground from "./components/BlurBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="relative z-10 mx-auto overflow-x-hidden antialiased max-w-7xl">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Testimonial />
        <Contacts />
      </main>
    </>
  );
}

export default App;
