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
    {/* <img src="src\assets\intro.jpg" className="intro"></img> */}
      <Header />
      <section className="main">
        <Video />
        <Chat />
      </section>
      <Footer />
    </div>
  );
}

export default App;
