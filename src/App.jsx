import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero/Hero2";
import GameProgrammingSection from "./components/game_programming/GameProgrammingSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <GameProgrammingSection />
    </>
  );
}

export default App;
