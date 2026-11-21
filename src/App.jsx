import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import GameProgrammingSection from "./components/game_programming/GameProgrammingSection";
import VideoEditing from "./components/video_editing/VideoEditing";
import GraphicDesign from "./components/graphic_design/GraphicDesign";
import Waterfall from "./components/waterfall/Waterfall";
import Waterfall2 from "./components/waterfall/Waterfall2";
import Footer from "./components/Footer";
import MidWaterfall from "./components/waterfall/MidWaterfall";
import { artCollectionLinks } from "./components/waterfall/artCollectionLinks";
import { BackgroundAnimationContext } from "./components/BackgroundAnimationContext";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBackgroundPaused, setIsBackgroundPaused] = useState(false);

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (!hash) {
        return;
      }

      if (hash === "animated-comic") {
        setSelectedProject(null);
        // Open immediately to avoid flashing the landing page before modal mount.
        setTimeout(() => {
          setSelectedProject("animatedcomic");
        }, 0);
        return;
      }

      if (hash === "sonic-fan-game") {
        setSelectedProject(null);

        // Open immediately to avoid flashing the landing page before modal mount.
        setTimeout(() => {
          setSelectedProject("sonicfangame");
        }, 0);
        return;
      }

      setSelectedProject(null);

      setTimeout(() => {
        const section = document.getElementById(
          artCollectionLinks.some(
            (collection) => collection.section === hash || collection.items.includes(hash)
          ) ? "3d-environment-art" : hash
        );
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <BackgroundAnimationContext.Provider value={isBackgroundPaused}>
      <Navbar />
      <Hero onDemoReelOpenChange={setIsBackgroundPaused} />
      <div id="game-programming">
        <GameProgrammingSection 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject}
        />
      </div>
      <div id="video-editing">
        <VideoEditing />
      </div>
      <div id="graphic-design">
        <GraphicDesign />
      </div>
      <div>
        <Waterfall />
      </div>
      <div id="3d-art">
        <MidWaterfall />
      </div>
      <div id="web-design">
        <Waterfall2 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject}
        />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </BackgroundAnimationContext.Provider>
  );
}

export default App;
