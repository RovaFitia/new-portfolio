import type { JSX } from "react";
import { Container } from "../../container/Container";
import { Typography } from "../../ui/Typography";
import Copyright from "./Copyright";

export default function Footer(): JSX.Element {


    // Pastilles stylisées avec dégradés réels
    const badgeIcons = [
        {
            bg: "from-blue-600 to-indigo-600",
            shape: "◆",
            text: "text-amber-200",
        },
        {
            bg: "from-amber-300 to-yellow-400",
            shape: "✚",
            text: "text-purple-950",
        },
        {
            bg: "from-pink-500 to-rose-500",
            shape: "▮",
            text: "text-emerald-950",
        },
        { bg: "from-sky-200 to-sky-400", shape: "●", text: "text-indigo-900" },
        {
            bg: "from-emerald-600 to-teal-800",
            shape: "■",
            text: "text-pink-300",
        },
        {
            bg: "from-emerald-400 to-green-500",
            shape: "⬢",
            text: "text-amber-200",
        },
        {
            bg: "from-orange-300 to-peach-400",
            shape: "✿",
            text: "text-rose-900",
        },
    ];

    return (
        <footer className="w-full bg-[#f9f9f7] text-text py-10">
            <Container>
                <div className="mx-auto max-w-7xl border border-line bg-[#f9f9f7] shadow-sm">
                    {/* Grille Principale */}
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Colonne Gauche : Logo + Pastilles */}
                        <div className="flex flex-col justify-between border-b border-line p-8 min-h-70 lg:col-span-7 lg:border-b-0 lg:border-r">
                            {/* Logo Teak / CodeurMDG */}
                            <div>
                                <a
                                    href="#"
                                    className="inline-block text-text"
                                    aria-label="Accueil"
                                >
                                    <svg
                                        className="h-20 w-20 fill-current"
                                        viewBox="0 0 100 100"
                                    >
                                        <circle cx="50" cy="20" r="11" />
                                        <path d="M18 36 L38 36 L50 60 L62 36 L82 36 L62 66 L72 90 L56 90 L50 78 L44 90 L28 90 L38 66 Z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Rangée de pastilles géométriques */}
                            <div className="mt-12 flex flex-wrap items-center gap-2.5">
                                {badgeIcons.map((badge, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br ${badge.bg} ${badge.text} text-xs font-bold shadow-inner transition-transform hover:scale-110 cursor-pointer`}
                                    >
                                        <span>{badge.shape}</span>
                                    </div>
                                ))}
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
