import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Service from "@/components/section/service/Service";
import Portfolio from "@/components/section/portfolio/Portfolio";
import { CtaSection } from "@/components/section/cta/CtaSection";

export const LandingPage = () => {
    return (
        <>
            <Hero />
            <div id="apropos" />
            <About />
            <Service />
            <Portfolio />
            <CtaSection />
        </>
    );
};
