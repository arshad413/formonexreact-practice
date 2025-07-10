
import React, { useState } from "react";
import "./App.css";

const animals = {
  Lion: "🦁 The lion is known as the king of the jungle.",
  Elephant: "🐘 Elephants are the largest land animals on Earth.",
  Tiger: "🐯 Tigers are solitary hunters with distinctive stripes.",
  Panda: "🐼 Pandas are loved for their black and white fur and bamboo diet."
};

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState("Click an animal");

  return (
    <div className="container">
    
      <header className="navbar">
        <div className="nav-left">🌿 ZooApp</div>
        <div className="nav-center">Animal Explorer</div>
        <div className="nav-right">👤</div>
      </header>

      <div className="content">
        <aside className="sidebar">
          {Object.keys(animals).map((animal) => (
            <button
              key={animal}
              className="sidebar-button"
              onClick={() => setSelectedAnimal(animals[animal])}
            >
              {animal}
            </button>
          ))}
        </aside>

        <main className="main">
          <h2>Animal Info</h2>
          <p>{selectedAnimal}</p>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-left">© 2025 ZooApp</div>
        <div className="footer-center">
          <a href="#">About</a> | <a href="#">Contact</a>
        </div>
        <div className="footer-right">📘 🐦 📸</div>
      </footer>
    </div>
  );
}

export default App;