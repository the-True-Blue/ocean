import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero/Hero2";
import GameProgrammingSection from "./components/game_programming/GameProgrammingSection";
import VideoEditing from "./components/video_editing/VideoEditing";
import Waterfall from "./components/waterfall/Waterfall";
import Waterfall2 from "./components/waterfall/Waterfall2";
import Footer from "./components/Footer";
import MidWaterfall from "./components/waterfall/MidWaterfall";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Hero2 /> */}
      <GameProgrammingSection />
      <VideoEditing />
      <Waterfall />
      <MidWaterfall />
      <Waterfall2 />
      <Footer />
    </>
  );
}

export default App;
