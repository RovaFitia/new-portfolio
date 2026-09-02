export default function HeroBackgroundText() {
    return (
        <div className="relative py-6 -mb-16 col-span-full w-full flex justify-center border-t border-white/10 overflow-hidden">
            {/* 1. Motifs de fond diagonaux (stries à 45°) */}
            <svg className="pointer-events-none absolute inset-0 -z-10 size-full select-none text-white/20 dark:text-blue-400/10">
                <defs>
                    <pattern
                        id="diag-pattern"
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
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diag-pattern)" />
            </svg>

            {/* 2. Lignes horizontales en dégradé */}
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 size-full stroke-blue-500 opacity-20"
            >
                <defs>
                    <pattern
                        id="lines-fade"
                        width="10"
                        height="1000"
                        patternUnits="userSpaceOnUse"
                        x="-1"
                        y="-1"
                    >
                        {Array.from({ length: 100 }).map((_, i) => (
                            <line
                                key={i}
                                x1="0"
                                y1={i * 10}
                                x2="100%"
                                y2={i * 10}
                                strokeOpacity={(1 - i * 0.01).toFixed(2)}
                            />
                        ))}
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill="url(#lines-fade)"
                />
            </svg>

            {/* 3. Logos/Textes vectoriels superposés style "Zed" avec relief géométrique */}
            <svg
                width="1100"
                height="180"
                viewBox="0 0 1100 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-6xl h-auto opacity-40 select-none pointer-events-none px-4"
            >
                <g stroke="white" strokeWidth="1.2" strokeLinejoin="round">
                    {/* Contour externe principal */}
                    <path
                        d="M 20,40 H 120 V 65 H 50 V 115 H 120 V 140 H 20 Z M 140,40 H 240 V 140 H 140 Z M 260,40 H 330 C 370,40 370,140 330,140 H 260 Z M 390,40 H 480 V 65 H 420 V 80 H 470 V 102 H 420 V 115 H 480 V 140 H 390 Z M 500,40 H 530 V 115 H 580 V 40 H 610 V 140 H 500 Z M 670,40 H 700 L 735,95 L 770,40 H 800 V 140 H 775 V 80 L 742,130 H 728 L 695,80 V 140 H 670 Z M 820,40 H 890 C 930,40 930,140 890,140 H 820 Z M 950,40 H 1050 V 75 H 1000 V 105 H 1025 V 140 H 950 V 40 Z"
                        fill="white"
                        fillOpacity="0.03"
                        strokeOpacity="0.4"
                    />

                    {/* Tracés internes / Wireframe superposé (donne l'effet architectural Zed) */}
                    <path
                        d="M 25,45 H 115 V 60 H 55 V 120 H 115 V 135 H 25 Z M 165,65 H 215 V 115 H 165 Z M 285,65 H 325 C 345,65 345,115 325,115 H 285 Z M 395,45 H 475 V 60 H 425 V 85 H 465 V 97 H 425 V 120 H 475 V 135 H 395 Z M 845,65 H 885 C 905,65 905,115 885,115 H 845 Z M 975,60 H 1025 V 70 H 975 Z"
                        fill="white"
                        fillOpacity="0.015"
                        strokeOpacity="0.25"
                        strokeDasharray="4 2"
                    />
                </g>
            </svg>
        </div>
    );
}
