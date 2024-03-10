import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Video from "./Video";
import Chat from "./Chat";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="all">
      <div className="intro">
        <img src="src/assets/logo.png" alt="Logo" className="intro-logo" />
        <article className="skranji-bold">Welcome to FemmeFeel!</article>
      </div>
      <Header />
      <section className="main">
        <Video/>
        <Chat />
      </section>
      <Footer />
    </div>
  );
}

export default App;
