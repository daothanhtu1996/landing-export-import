import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTopButton/ScrollToTopButton";
import FloatingContactIcons from "./components/FloatingContactIcons/FloatingContactIcons";
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <FloatingContactIcons />
    </div>
  );
}

export default App;
