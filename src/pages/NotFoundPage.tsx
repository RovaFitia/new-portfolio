import { SEO } from "@/components/seo/SEO";
import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Page non trouvée"
                description="La page que vous recherchez n'existe pas ou a été déplacée."
                noindex={true}
            />
            <main className="min-h-screen flex flex-col items-center justify-center bg-white text-[#111] text-center p-6 font-sans">
                <h1 className="text-[clamp(6rem,22vw,13rem)] font-black tracking-[-0.06em] leading-none bg-linear-to-b from-[#111] via-[#111] via-30% to-[#bbb] bg-clip-text text-transparent select-none">
                    404
                </h1>

                <h2 className="text-[1.2rem] tracking-[-0.01em] mt-2 mb-2.5">
                    Ce page n'existe pas
                </h2>

                <p className="text-[#777] text-[0.92rem] max-w-[40ch] mb-7">
                    Le lien est peut-être rompu, ou la page a peut-être été
                    déplacée. Quoi qu'il en soit, il n'y a rien d'autre ici que
                    de très grands nombres.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-primary-400 text-text font-haffer-md text-[0.9rem] px-6.5 py-3.25 rounded-[11px] no-underline transition-transform duration-150 hover:translate-y-[-2px]"
                >
                    ← Retour à l'accueil
                </Link>
            </main>
        </>
    );
};

export default NotFoundPage;
