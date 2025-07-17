import image from "/sample.png";
import "./App.css";

function App() {
  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      alert("Double touch detected!");
      // You can trigger any action here
    }
  };

  return (
    <div className="welcome-container">
      <img
        onTouchStart={handleTouchStart}
        src={image}
        alt="Centered"
        className="welcome-image"
      />
    </div>
  );
}

export default App;
