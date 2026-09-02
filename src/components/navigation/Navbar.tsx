import { useState } from "react";
import type { JSX } from "react";
import { Container } from "@/components/container/Container";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const navLinks = [
        { name: "Product", href: "#product" },
        { name: "Solutions", href: "#solutions" },
        { name: "Pricing", href: "#pricing" },
        { name: "Docs", href: "#docs" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/80 backdrop-blur-md transition-all">
            <Container>
                <nav
                    className="mx-auto flex max-w-6xl items-center justify-between py-3.5"
                    aria-label="Main Navigation"
                >
                    {/* Logo */}
                    {/*<a
                        href="#"
                        className="flex items-center gap-2.5 font-semibold text-text transition-opacity hover:opacity-90"
                    >
                        <span className="h-6 w-6 rounded-md bg-text" />
                        <span>CodeurMDG</span>
                    </a>*/}
                    <Logo />

                    {/* Navigation Desktop */}
                    <div className="hidden items-center gap-8 text-sm font-medium text-text/80 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="transition-colors hover:text-text"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Desktop */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Button variant="ghost" size="md">
                            Contactez-moi
                        </Button>
                    </div>

                    {/* Bouton Hamburger / Fermeture Mobile */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-lg p-2 text-text hover:bg-line/40 focus:outline-none focus:ring-2 focus:ring-text/20 md:hidden"
                        aria-label={
                            isOpen ? "Fermer le menu" : "Ouvrir le menu"
                        }
                        aria-expanded={isOpen}
                    >
                        <svg
                            className="h-6 w-6 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Dropdown Menu Mobile */}
                <div
                    className={`grid transition-all duration-300 ease-in-out md:hidden ${
                        isOpen
                            ? "grid-rows-[1fr] opacity-100 border-t border-line"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden px-6">
                        <div className="flex flex-col gap-4 py-5 text-base font-medium text-text">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="transition-colors hover:text-text"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="pt-2">
                                <Button
                                    variant="ghost"
                                    size="md"
                                    className="w-full justify-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contactez-moi
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
