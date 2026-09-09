import { Typography } from "@/components/ui/Typography";
import { FOOTER_SECTIONS } from "@/data/footerData";
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
                                <a
                                    href={link.href}
                                    target={
                                        link.external ? "_blank" : undefined
                                    }
                                    rel={
                                        link.external ? "noreferrer" : undefined
                                    }
                                    className="font-haffer-r text-sm text-neutral-500 hover:text-black inline-flex items-center gap-1"
                                >
                                    <span>{link.label}</span>
                                    {link.external && (
                                        <span className="text-[10px]">↗</span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
