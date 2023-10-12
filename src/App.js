import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
