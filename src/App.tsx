import Navbar from "@/components/navigation/navbar/Navbar";
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Service from "@/components/section/service/Service";
import Footer from "@/components/navigation/footer/Footer";
import Portfolio from "@/components/section/portfolio/Portfolio";
import { CtaSection } from "./components/section/cta/CtaSection";

function App() {
    return (
        <>
            <Navbar/>
            <Hero />
            <div id="apropos" />
            <About />
            <Service />
            <Portfolio />
            <CtaSection />
            <Footer />
        </>
    );
}

export default App;
