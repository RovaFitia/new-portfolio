import type { JSX } from "react";

export default function Copyright(): JSX.Element {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line px-6 py-3.5 font-haffer-r text-sm sm:flex-row">
            <div>Copyright © {currentYear} CodeurMDG</div>
            <div className="flex items-center gap-6">
                <a href="#top" className="text-neutral-500 hover:text-black flex items-center justify-center gap-2 group">
                    Back to top
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
                </a>
            </div>
        </div>
    );
}
