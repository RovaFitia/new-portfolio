import { Container } from "@/components/container/Container";
import Button from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import React from "react";

interface CtaProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    onButtonClick?: () => void;
}

export const CtaSection: React.FC<CtaProps> = ({
    title = "Intéressé par mes offre ?",
    subtitle = "Vous cherchez un développeur front-end ou un développeur WordPress expérimenté qui maîtrise aussi le SEO ? Vous êtes sur le bon profil, Collaborons et contactez-moi.",
    buttonText = "Collaborons ensemble",
    buttonHref = "https://wa.me/0344679728?text=Bienvenue%20sur%20Codeur%20MDG%2C%20quelle%20partie%20de%mes%20services%2C%20int%C3%A9ressez-vous",
    onButtonClick,
}) => {
    return (

        <Container>
            <section className="w-full py-12 md:py-20 lg:py-28" id="cta">
                <div className="relative overflow-hidden bg-white text-text p-6 md:p-10 lg:p-16  flex flex-col md:items-center justify-between gap-8 border border-line">
                    {/* Texture / Gradient discret en arrière-plan (optionnel pour l'effet de profondeur) */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent pointer-events-none"
                    />

                    {/* Bloc Texte */}
                    <div className="relative z-10 max-w-2xl space-y-4">
                        <div className="flex flex-col items-center justify-center gap-1.5">
                            <Typography
                                variant="lead"
                                component="div"
                                className="text-primary-400 uppercase font-haffer-r"
                            >
                                // <span className="text-text">CTA</span>
                            </Typography>
                            <Typography variant="h2" component="h2" className="text-center leading-none">
                                {title}
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="font-haffer-r text-dark text-balance text-center mt-2.5"
                            >
                                {subtitle}
                            </Typography>
                        </div>
                    </div>

                    {/* Bloc Bouton CTA */}
                    <div className="relative z-10 shrink-0">
                        <Button
                            href={buttonHref}
                            onClick={onButtonClick}
                            className="group"
                        >
                            <span>{buttonText}</span>
                            {/* Icône Flèche vers le haut-droite (Arrow Up Right) */}
                            <svg
                                className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </section>
        </Container>
    );
};
