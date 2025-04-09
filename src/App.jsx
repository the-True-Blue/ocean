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

function App() {
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
        <MidWaterfall />
      </div>
      <div id="web-design">
        <Waterfall2 />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
