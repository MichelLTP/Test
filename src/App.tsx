import image from "/sample.png";
import "./App.css";

function App() {
  return (
    <div className="welcome-container">
      <img src={image} alt="Centered" className="welcome-image" />
    </div>
  );
}

export default App;
