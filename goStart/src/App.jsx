import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Navbar from "./Components/Navbar";
import Page from "./Components/Page";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Page />
      </div>
    </>
  );
}

export default App;
