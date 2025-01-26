import Image from "next/image";
import { NewBackground } from "./components/NewBackground"
import { HoverEffect } from "./components/CardSpotlight"

export default function Home() {
  

  return ( <>
    <NewBackground>
      <h1 className="text-black dark:text-white"></h1> 
    </NewBackground>
    </>
  );
}
