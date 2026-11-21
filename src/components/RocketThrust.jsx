import { useContext, useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";
import { BackgroundAnimationContext } from "./BackgroundAnimationContext";

const RocketThrust = () => {
  const isPaused = useContext(BackgroundAnimationContext);
  const { rive, RiveComponent } = useRive({
    src: "/animations/untitled.riv",
    animations: "Timeline 1",
    autoplay: false,
  });

  useEffect(() => {
    if (!rive) return;
    if (isPaused) {
      rive.pause();
    } else {
      rive.play("Timeline 1");
    }
  }, [rive, isPaused]);

  return <RiveComponent />;
};

export default RocketThrust;
