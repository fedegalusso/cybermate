import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Team />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
