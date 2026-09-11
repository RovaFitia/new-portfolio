import React, { useState, useId } from "react";
import { Typography } from "./Typography";

type CardProps = {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    href?: string;
    width?: number;
    height?: number;
};

export const ProjectCard: React.FC<CardProps> = ({
    imageSrc,
    imageAlt = "Project image",
    title,
    href = "#",
    width,
    height,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const patternId = useId(); // Génère un ID unique par carte pour le SVG

    const finalSrc = imageSrc || "https://picsum.photos/id/237/200/300";

    return (
        <div className="max-w-sm relative rounded-xs border border-line bg-white shadow-sm transition-all hover:shadow-[6px_6px_0_#074dcf0f] hover:border-primary-500 cursor-pointer">
            {/* Conteneur de l'image / Skeleton */}
            <div className="relative h-55 w-full overflow-hidden p-2.5">
                {/* Motif SVG en arrière-plan */}
                <svg className="z-1 absolute inset-0 size-full pointer-events-none select-none text-line">
                    <defs>
                        <pattern
                            id={patternId}
                            width="4"
                            height="4"
                            patternUnits="userSpaceOnUse"
                            patternTransform="rotate(45)"
                        >
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            ></line>
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill={`url(#${patternId})`}
                    ></rect>
                </svg>

                <div className="size-full rounded-s relative z-5 overflow-hidden">
                    {/* SKELETON : Affiché pendant le chargement de l'image */}
                    {!isLoaded && !hasError && (
                        <div className="size-full animate-pulse bg-gray-200 rounded-s flex items-center justify-center" />
                    )}

                    {/* FALLBACK : Affiché si l'image échoue au chargement */}
                    {hasError ? (
                        <div className="size-full bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400 rounded-s border border-dashed border-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="size-6"
                            >
                                <line x1="2" y1="2" x2="22" y2="22" />
                                <path d="M10.41 10.41A2 2 0 0 0 12 14a2 2 0 0 0 1.59-.59" />
                                <path d="M5 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
                                <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                <line x1="2" y1="2" x2="22" y2="22" />
                            </svg>
                            <span className="text-xs">Image indisponible</span>
                        </div>
                    ) : (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Voir le projet : ${title}`}
                        >
                            <img
                                src={finalSrc}
                                alt={imageAlt}
                                width={width}
                                height={height}
                                loading="lazy"
                                onLoad={() => setIsLoaded(true)}
                                onError={() => setHasError(true)}
                                className={`h-full w-full shadow-md transition-opacity duration-300 ${
                                    isLoaded
                                        ? "opacity-100"
                                        : "opacity-0 absolute inset-0"
                                }`}
                            />
                        </a>
                    )}
                </div>
            </div>

            {/* Contenu : Titre et Bouton d'action */}
            <div className="flex items-center justify-between gap-4 p-3">
                {!isLoaded && !hasError ? (
                    /* Skeleton du titre + bouton */
                    <div className="flex items-center justify-between w-full animate-pulse">
                        <div className="h-5 bg-gray-200 rounded w-2/3" />
                        <div className="h-8 w-8 bg-gray-200 rounded-full shrink-0" />
                    </div>
                ) : (
                    /* Contenu réel une fois chargé */
                    <>
                        <Typography
                            variant="lead"
                            component="h3"
                            className="font-haffer-md leading-snug tracking-tight max-w-[70%]"
                        >
                            {title}
                        </Typography>

                        <a
                            href={href}
                            aria-label={`Voir le projet : ${title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 shrink-0 items-center justify-center text-xs rounded-full bg-dark/70 text-white transition-transform hover:scale-105 active:scale-95"
                        >
                            {/*<ArrowUpRight className="h-3 w-3 stroke-[2.5]" />*/}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-3 w-3 stroke-[2.5]"
                            >
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
