import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import GameProgrammingSection from "./components/game_programming/GameProgrammingSection";
import VideoEditing from "./components/video_editing/VideoEditing";
import GraphicDesign from "./components/graphic_design/GraphicDesign";
import Waterfall from "./components/waterfall/Waterfall";
import Footer from "./components/Footer";
import MidWaterfall2 from "./components/waterfall/MidWaterfall2";

function App() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div id="game-programming">
        <GameProgrammingSection />
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
        <MidWaterfall2 />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
