import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { Link } from "react-router-dom";

export const MentionLegalePage: React.FC = () => {
    const lastUpdated = "10 Septembre 2026";

    return (
        <main className="min-h-screen bg-paper text-text py-16">
            <Container className="max-w-3xl">
                {/* En-tête */}
                <div className="border-b border-line pb-8 mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm font-medium text-dark hover:text-black mb-6 transition-colors tracking-tight"
                    >
                        ← Retour à l'accueil
                    </Link>
                    <Typography variant="h1" component="h1" className="tracking-tight leading-none text-text mb-4">
                        Mention légale
                    </Typography>
                    <p className="text-sm  text-dark tracking-tight">
                        Dernière mise à jour : <time>{lastUpdated}</time>
                    </p>
                </div>

                {/* Contenu textuel */}
                <div className="space-y-10 text-base leading-relaxed text-neutral-600">
                    {/* Section 1 */}
                    <section className="space-y-3">
                        <Typography variant="body" component="p" className="tracking-tight text-text mb-3">
                            Les présentes mentions légales ont pour but de définir les conditions d’utilisation du site Codeur mdg et de ses services. En accédant à ce site, vous acceptez sans réserve les présentes mentions légales.
                        </Typography>
                    </section>
                    <section className="space-y-3 text-[13.8px]">
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            <span className="text-text text-[18px] font-solar-md tracking-wide underline">Propriétaire du site :</span> Codeurmdg
                        </Typography>
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            <span className="text-text text-[18px] font-solar-md tracking-wide underline">Adresse :</span> IVJ 22 RA Ambohimiadana Avaratra
                        </Typography>
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            <span className="text-text text-[18px] font-solar-md tracking-wide underline">Numéro d'identification fiscale (NIF) :</span> 3019 012 620
                        </Typography>
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            <span className="text-text text-[18px] font-solar-md tracking-wide underline">Numero Statistique (STAT) :</span> 63122 11 2024 0 08 323
                        </Typography>
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            <span className="text-text text-[18px] font-solar-md tracking-wide underline">Adresse électronique :</span> codeurmdg@gmail.com
                        </Typography>
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            <span className="text-text text-[18px] font-solar-md tracking-wide underline">Créateur du site :</span> ANDRIAMBELOMANGA Rovampitiavana Ravakiniana
                        </Typography>
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            <span className="text-text text-[18px] font-solar-md tracking-wide underline">Hébergement :</span> Le site Codeur mdg est hébergé par <a href="https://vercel.com" target="_blank" className="underline">Vercell</a>
                        </Typography>
                    </section>
                    <section className="space-y-3">
                        <Typography variant="body" component="p" className="tracking-normal text-text mb-3">
                            Les informations présentes sur ce site sont fournies à titre informatif. Codeur mdg s'efforce de garantir l'exactitude des données publiées. Pour toute question ou remarque concernant le contenu du site, merci de nous contacter via l'adresse électronique mentionnée ci-dessus.
                        </Typography>
                    </section>
                </div>
            </Container>
        </main>
    );
};

export default MentionLegalePage;
