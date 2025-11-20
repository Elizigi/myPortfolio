import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import About from "./screens/about/About";
import Contacts from "./screens/contacts/Contacts";
import Home from "./screens/home/Home";
import Projects from "./screens/projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Home/>
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
