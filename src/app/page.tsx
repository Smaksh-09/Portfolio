import Image from "next/image";
import { NewBackground } from "./components/NewBackground"
import { HoverEffect } from "./components/CardSpotlight"
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Text from "./components/Home";

export default function Home() {
  return (
    <main className="relative bg-gray-900">
      <NavBar />
      <Text />
      <Resume />
      <div className="relative z-10">
        <Skills />
      </div>
      <NewBackground>
        <div></div>
      </NewBackground>
    </main>
  );
}
