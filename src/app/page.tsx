import NavBar from "./components/NavBar";  
import Resume from "./components/Resume";  
import { Text } from "./components/Home";  
import SkillsSection from './components/CardSpotlight';  
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <NavBar />      
      <Text />
      <Resume />
      <div className="relative z-10">
        <SkillsSection />
      </div>
      <Projects />
      <About />
    </main>
  );
}
