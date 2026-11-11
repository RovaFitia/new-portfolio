import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Service from "@/components/section/service/Service";
import Portfolio from "@/components/section/portfolio/Portfolio";
import { SEO } from "@/components/seo/SEO";
import Reviews from "@/components/section/reviews/Reviews";
import FAQSection from "@/components/section/faq/FAQSection";
import ContactSection from "@/components/section/contact/ContactSection";



export const LandingPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <SEO
                title={t("landing.seo.title")}
                description={t("landing.seo.desc")}
            />

            <main>
                <Hero />
                <div id="apropos" />
                <About />
                <Service />
                <Reviews />
                <Portfolio />
                <FAQSection />
                <ContactSection />
            </main>
        </>
    );
};
