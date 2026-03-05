import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Venues from './components/Venues';
import Sets from './components/Sets';
import Dates from './components/Dates';
import Media from './components/Media';
import UeberMich from './components/UeberMich';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-violet selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Venues />
          <Sets />
          <Dates />
          <Media />
          <UeberMich />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
