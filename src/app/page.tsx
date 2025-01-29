import NavBar from "./components/NavBar";  
import Resume from "./components/Resume";  
import { Text } from "./components/Home";  
import SkillsSection from './components/CardSpotlight';  
import SocialIcons from "./components/Iconss";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <NavBar />      
      <Text />
      <Resume />
      <SocialIcons />
      <div className="relative z-10">
        <SkillsSection />
      </div>
      <Projects />
    </main>
  );
}
