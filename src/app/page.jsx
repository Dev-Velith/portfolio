import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import AboutSection from '../components/AboutSection';
import ExperienceEducation from '../components/ExperienceEducation';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <SelectedWork />
      <AboutSection />
      <ExperienceEducation />
      <ContactSection />
      <Footer />
    </main>
  );
}
