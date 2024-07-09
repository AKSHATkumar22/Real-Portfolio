import "./app.scss";
import Contact from "./components/Contacts/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        {" "}
        <Parallax type="services" />
      </section>
      {/* <section id="Projects">
        <Parallax type="projects" />
      </section> */}
      <section>
        <Services />
      </section>

      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Portfolio />
      <section id="Contact Me">
        <Contact />
      </section>
    </div>
  );
};

export default App;
