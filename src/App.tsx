import Navbar from "@/components/navigation/navbar/Navbar";
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Service from "@/components/section/service/Service";
import Footer from "@/components/navigation/footer/Footer";
import Portfolio from "@/components/section/portfolio/Portfolio";

function App() {
    return (
        <>
            <Navbar/>
            <Hero />
            <About />
            <Service />
            <Portfolio />
            <Footer />
        </>
    );
}

export default App;
