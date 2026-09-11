import { NAV_LINKS } from "@/data/data";
import Button from "@/components/ui/Button";
import type { JSX } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
type NavMobileProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export default function NavMobile({
    isOpen,
    setIsOpen,
}: NavMobileProps): JSX.Element {
    return (
        <div
            className={`grid transition-all duration-300 ease-in-out md:hidden md:px-0 ${
                isOpen
                    ? "grid-rows-[1fr] opacity-100 border-t border-line"
                    : "grid-rows-[0fr] opacity-0"
            }`}
        >
            <div className="overflow-hidden">
                <div className="flex flex-col pb-5  text-text">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                setIsOpen(false);
                                scrollToSection(e, link.href);
                            }}
                            className="flex items-center justify-between px-5 py-3 border-b border-b-line/70 transition-colors hover:text-primary-400 font-haffer-r hover:bg-text"
                        >
                            {link.name}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                text-neutral-500
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    ))}

                    <div className="pt-5 px-5">
                        <Button
                            href="#cta"
                            variant="solid"
                            size="md"
                            className="w-full justify-center"
                            onClick={(e) => {
                                setIsOpen(false);
                                scrollToSection(e, "#cta");
                            }}
                        >
                            Contactez-moi
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
