import "./App.css";
import NavBar from "./components/navBar/NavBar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
    </>
  );
}

export default App;
