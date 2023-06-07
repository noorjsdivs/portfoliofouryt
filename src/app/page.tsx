import Aboutme from "@/src/components/Aboutme";
import Banner from "@/src/components/Banner";
import Contact from "@/src/components/Contact";
import Experience from "@/src/components/Experience";
import Footer from "@/src/components/Footer";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
