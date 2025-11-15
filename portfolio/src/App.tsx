import "./App.css";
import NavBar from "./components/navBar/NavBar";
import SentenceWriter from "./components/sentenceWriter/SentenceWriter";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="card">
        <SentenceWriter></SentenceWriter>
      </div>
    </>
  );
}

export default App;
