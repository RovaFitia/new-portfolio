import { Link } from "react-router-dom";
import type { JSX } from "react";
import { Container } from "../../container/Container";
import Copyright from "./Copyright";
import PhysicsBadges from "@/components/ui/PhysicsBadges";
import { Vector } from "@/data";
import { FooterLinks } from "./FooterLinks";

export default function Footer(): JSX.Element {

    return (
        <footer className="w-full bg-[#f9f9f7] text-text py-10">
            <Container>
                <div className="mx-auto max-w-7xl border border-line bg-[#f9f9f7] shadow-sm">
                    {/* Grille Principale */}
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Colonne Gauche : Logo + Pastilles */}
                        <div className="relative flex flex-col justify-between border-b border-line min-h-70 lg:col-span-7 lg:border-b-0 lg:border-r">
                            {/* Logo Teak / CodeurMDG */}
                            <Link to="/" className="">
                                <img alt={Vector.alt} loading="lazy" width={200} height={200} decoding="async" data-nimg="1" src={Vector.image} />
                            </Link>

                            {/* Rangée de pastilles géométriques */}
                            <div className="w-full mt-12 flex flex-wrap items-center gap-2.5">
                                <PhysicsBadges />
                            </div>
                        </div>

                        {/* Colonne Droite : Grille 2x2 des Liens */}
                        <FooterLinks />
                    </div>

                    {/* Barre du bas (Copyright & Mentions) */}
                    <Copyright />
                </div>
            </Container>
        </footer>
    );
}
