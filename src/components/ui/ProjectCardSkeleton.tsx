import React from "react";

export const ProjectCardSkeleton: React.FC = () => {
    return (
        <div
            role="status"
            className="max-w-sm w-full rounded-xs border border-line bg-white p-0 shadow-sm animate-pulse"
        >
            {/* Zone Image Flowbite avec SVG placeholder */}
            <div className="relative h-55 w-full p-2.5">
                <div className="flex items-center justify-center h-full w-full rounded-s bg-gray-300">
                    <svg
                        className="w-10 h-10 text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                    >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.74-1.673l4.5-5a1 1 0 0 1 1.482.031l2.39 2.654 1.83-1.83a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1 .004 1.414Z" />
                    </svg>
                </div>
            </div>

            {/* Zone Contenu : Titre (70% max) et Bouton Action */}
            <div className="flex items-center justify-between gap-4 p-3">
                <div className="w-[70%] space-y-2">
                    <div className="h-3.5 bg-gray-200 rounded-full w-full" />
                    <div className="h-2.5 bg-gray-200 rounded-full w-3/4" />
                </div>

                {/* Bouton circulaire d'action */}
                <div className="h-8 w-8 shrink-0 rounded-full bg-gray-200" />
            </div>

            <span className="sr-only">Chargement...</span>
        </div>
    );
};
