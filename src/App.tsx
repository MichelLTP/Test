import image from "/sample.png";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const initialDistanceRef = useRef<number | null>(null);
  const [scale, setScale] = useState(1);

  const getDistance = (touches: React.TouchList) => {
    const [touch1, touch2] = [touches[0], touches[1]];
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      initialDistanceRef.current = getDistance(event.touches);
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length === 2 && initialDistanceRef.current) {
      const newDistance = getDistance(event.touches);
      const zoomFactor = newDistance / initialDistanceRef.current;

      // Clamp the zoom level between 0.5x and 3x
      setScale((prevScale) =>
        Math.min(3, Math.max(0.5, prevScale * zoomFactor))
      );

      // Update the reference distance
      initialDistanceRef.current = newDistance;

      // Prevent the default to avoid scrolling
      event.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    // Reset when fingers are lifted
    initialDistanceRef.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="h-screen flex items-center justify-center bg-gray-100 touch-none select-none"
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.05s linear",
        }}
        className="bg-blue-300 p-10 rounded-lg"
      >
        <img
          onTouchStart={handleTouchStart}
          src={image}
          alt="Centered"
          className="welcome-image"
        />
      </div>
    </div>
  );
}

export default App;
