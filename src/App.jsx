import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Ratings from "./components/ratings/Ratings";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Education"><Parallax type="education" /></section>
    <section><Education /></section>
    <section id="Projects"><Parallax type="projects" /></section>
    <Portfolio />
    <section id="Ratings"><Ratings /></section>
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
