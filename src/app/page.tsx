import { NewBackground } from "./components/NewBackground"
import NavBar from "./components/NavBar";  
import Resume from "./components/Resume";  
import { Text } from "./components/Home";  
import SkillsSection from './components/CardSpotlight';  
import SocialIcons from "./components/Iconss";  // Change to default import

export default function Home() {
  return (
    <main className="relative bg-gray-900">
      <NavBar />      
      <Text />
      <Resume />
      <SocialIcons />
      <div className="relative z-10">
        <SkillsSection />
      </div>
      
      <NewBackground>
        <div></div>
      </NewBackground>
      
    </main>
  );
}
