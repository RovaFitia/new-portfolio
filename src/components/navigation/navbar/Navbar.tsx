import type { JSX } from "react";
import { useEffect, useState } from "react";

import { Container } from "@/components/container/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import Hamburger from "./Hamburger";
import NavMobile from "./NavMobile";

import { NAV_LINKS } from "@/data/data";

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


    return (
        <header className={`sticky top-0 z-50 w-full border-b bg-paper/80 backdrop-blur-md transition-all
            ${isScrolled ? 'border-line' : 'border-transparent'}`}>
            <Container className="px-0 md:px-10">
                <nav
                    className="mx-auto flex max-w-6xl items-center justify-between py-3.5 px-5 md:px-0"
                    aria-label="Main Navigation"
                >
                    {/* Logo */}
                    <Logo />

                    {/* Navigation Desktop */}
                    <div className="hidden items-center gap-8 text-sm font-medium text-text/80 md:flex">
                        {NAV_LINKS.map((link) => (
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
                        <Button variant="solid" size="md">
                            Contactez-moi
                        </Button>
                    </div>

                    {/* Bouton Hamburger / Fermeture Mobile */}
                    <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
                </nav>

                {/* Dropdown Menu Mobile */}
                <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            </Container>
        </header>
    );
}
