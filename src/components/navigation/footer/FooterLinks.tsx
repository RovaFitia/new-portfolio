import { Link } from "react-router-dom";
import { Typography } from "@/components/ui/Typography";
import { FOOTER_SECTIONS } from "@/data/footerData";
import { scrollToSection } from "@/utils/scrollToSection";
import React from "react";

export const FooterLinks: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-5">
            {FOOTER_SECTIONS.map((section) => (
                <div
                    key={section.title}
                    className={`min-h-[204.5px] p-8 ${section.containerClassName ?? ""}`}
                >
                    <Typography
                        variant="h4"
                        className="mb-4 text-md font-haffer-md"
                    >
                        {section.title}
                    </Typography>

                    <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-700">
                        {section.links.map((link) => (
                            <li key={link.label}>
                                {link.external ? (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-haffer-r text-sm text-neutral-500 hover:text-black inline-flex items-center gap-1"
                                    >
                                        <span>{link.label}</span>
                                        <span className="text-[10px]">↗</span>
                                    </a>
                                ) : link.href.startsWith("#") ? (
                                    <a
                                        href={link.href}
                                        onClick={(e) =>
                                            scrollToSection(e, link.href)
                                        }
                                        className="font-haffer-r text-sm text-neutral-500 hover:text-black inline-flex items-center gap-1"
                                    >
                                        <span>{link.label}</span>
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="font-haffer-r text-sm text-neutral-500 hover:text-black inline-flex items-center gap-1"
                                    >
                                        <span>{link.label}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
