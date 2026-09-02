import type { JSX } from "react";
import { Container } from "../../container/Container";
import { Typography } from "../../ui/Typography";
import Copyright from "./Copyright";
import PhysicsBadges from "@/components/ui/PhysicsBadges";
import Logo from "@/components/ui/Logo";
import { Vector } from "@/data";

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
                            <div className="">
                                <img alt={Vector.alt} loading="lazy" width="200" decoding="async" data-nimg="1" src={Vector.image} />
                            </div>

                            {/* Rangée de pastilles géométriques */}
                            <div className="w-full mt-12 flex flex-wrap items-center gap-2.5">
                                <PhysicsBadges />
                            </div>
                        </div>

                        {/* Colonne Droite : Grille 2x2 des Liens */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-5">
                            {/* Product */}
                            <div className="min-h-[204.5px] border-b border-line p-8 sm:border-r">
                                <Typography variant="h4" className="mb-4 text-md font-haffer-md">App</Typography>
                                <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-700">
                                    <li>
                                        <a href="#why" className="font-haffer-r text-sm text-neutral-500 hover:text-black">
                                            Why Teak
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#pricing"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-black"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#demo"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-blac"
                                        >
                                            Schedule demo
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#login"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-blac"
                                        >
                                            Log in
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div className="min-h-[204.5px] border-b border-line p-8">
                                <Typography variant="h4" className="mb-4 text-md font-haffer-md">Informations</Typography>
                                <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-700">
                                    <li>
                                        <a
                                            href="#docs"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-black"
                                        >
                                            Docs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#blog"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-black"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#support"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-black"
                                        >
                                            <span>Contact Support</span>
                                            <span className="text-[10px]">↗</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="min-h-[204.5px] border-b border-line p-8 sm:border-b-0 sm:border-r">
                                <Typography variant="h4" className="mb-4 text-md font-haffer-md">Company</Typography>

                                <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-700">
                                    <li>
                                        <a
                                            href="#about"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-black"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#sales"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-black"
                                        >
                                            <span>Contact Sales</span>
                                            <span className="text-[10px]">↗</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Find us */}
                            <div className="min-h-[204.5px] p-8">
                                <Typography variant="h4" className="mb-4 text-md font-haffer-md">Find us</Typography>
                                <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-700">
                                    <li>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-haffer-r text-sm text-neutral-500 hover:text-black"
                                        >
                                            <span>LinkedIn</span>
                                            <span className="text-[10px]">↗</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Barre du bas (Copyright & Mentions) */}
                    <Copyright />
                </div>
            </Container>
        </footer>
    );
}
