import Image from "next/image";
import { NewBackground } from "./components/NewBackground"
import { HoverEffect } from "./components/CardSpotlight"
import NavBar from "./components/NavBar";
import Text from "./components/Home";

export default function Home() {
  return (
    <main>
      <NavBar />
     <Text></Text>
      <NewBackground>
        <h1 className="text-black dark:text-white"></h1> 
      </NewBackground>

    </main>
  );
}
