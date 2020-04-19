import React from 'react';
import './App.css';
import Navbar from "./components/header.js"
import Intro from "./components/features/intro.js"
import Whyframe from "./components/features/whyframe.js"
import FeatureWorks from "./components/features/feature.js"
import Impressivework from "./components/features/impressivework.js"
import Whychoose from "./components/features/whychoose.js"
import Client from "./components/features/client.js"
import Footer from "./components/features/footer.js"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Whyframe/>
      <FeatureWorks/>
      <Impressivework/>
      <Whychoose/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
