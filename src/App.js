import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Hero />
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
