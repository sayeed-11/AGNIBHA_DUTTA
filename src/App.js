import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App  bg-white w-full min-h-screen font-Barlow flex flex-col">
      <Navbar/>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
