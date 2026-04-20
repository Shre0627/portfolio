import Bio from "@/app/components/sections/Bio";
import AboutMe from "@/app/components/sections/AboutMe";
import NavBar from "@/app/components/sections/NavBar";
import Career from "@/app/components/sections/Career";
import TechStack from "@/app/components/sections/TechStack";
import Projects from "@/app/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans bg-white">
      <NavBar />
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">   
          {/**Should add all the sections to a component a return that singular component */}
          <Bio />
          <AboutMe />
          <Career />
          <Projects />
          <TechStack />
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          
        </div>
      </main>
    </div>
  );
}
