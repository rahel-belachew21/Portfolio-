import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsOverview from "@/components/ProjectsOverview";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ProjectsOverview />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
