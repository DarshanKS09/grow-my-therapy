// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import About from "./components/About";
import Background from "./components/Background";
import FAQ from "./components/FAQ";
import Support from "./components/Support";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Office from "./components/Office";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <About />
      <Background />
      <Office />
      <FAQ />
      <Support />
      <CTA />
      <Footer />
    </>
  );
}