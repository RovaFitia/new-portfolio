import React from "react";
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Service from "@/components/section/service/Service";
import Portfolio from "@/components/section/portfolio/Portfolio";
import { CtaSection } from "@/components/section/cta/CtaSection";
import { SEO } from "@/components/seo/SEO";
import Reviews from "@/components/section/reviews/Reviews";
import FAQSection from "@/components/section/faq/FAQSection";



export const LandingPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Freelance, expert en WordPress et développer front-end"
                description="Freelance basé à Madagascar, spécialisée dans la création de site web unique, moderne, optimisé, et référencé SEO."
            />

            <main>
                <Hero />
                <div id="apropos" />
                <About />
                <Service />
                <Reviews />
                <Portfolio />
                <FAQSection />
                <CtaSection />
            </main>
        </>
    );
};
