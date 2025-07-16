import "./index.css";
import image from "./assets/sample.png";

function App() {
  return (
    <div className="relative h-screen w-screen bg-gray-100">
      <img
        src={image}
        alt="Centered"
        className="fixed top-1/2 left-1/2 max-w-full max-h-full object-contain transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export default App;
