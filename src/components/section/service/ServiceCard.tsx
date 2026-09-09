import { useState, useEffect } from "react";
import { Typography } from "@/components/ui/Typography";
import Badge from "@/components/ui/Badge";
import SERVICES from "@/data/services";
import { ServiceCardSkeleton } from "@/components/ui/ServiceCardSkeleton";

export default function ServiceCard() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Services grid */}
            <div className="w-full flex flex-col mt-20">
                {isLoading ? (
                    <ServiceCardSkeleton />
                ) : (
                    <>
                        {/* 1. Service Full-width (WordPress) */}
                        {(() => {
                            const service = SERVICES.find(
                                (s) => s.id === "wordpress",
                            );
                            if (!service) return null;
                            return (
                                <div className="group min-h-110 border border-line p-6 md:p-10 border-b-0 flex flex-col md:flex-row gap-10 md:gap-0">
                                    <div className="max-w-full md:max-w-1/2 flex flex-col gap-3 text-balance">
                                        <Typography
                                            variant="h3"
                                            component="h4"
                                            className="font-haffer-sb tracking-[-0.1rem] text-text"
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            component="p"
                                            className="font-haffer-md text-neutral-600"
                                        >
                                            {service.description}
                                        </Typography>
                                        <div className="flex flex-wrap items-center gap-2.5 mt-3">
                                            {service.tags.map((tag, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="solid"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="max-w-full md:max-w-1/2 image-mask relative p-2 border border-line">
                                        <svg className="z-[-1] absolute inset-0 size-full pointer-events-none select-none text-line">
                                            <defs>
                                                <pattern
                                                    id=":R5taafknq6ja:"
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
                                                fill="url(#:R5taafknq6ja:)"
                                            ></rect>
                                        </svg>
                                        <div className="w-full h-100 overflow-hidden">
                                            <img
                                                src={service.image.path}
                                                alt={service.image.alt}
                                                loading="lazy"
                                                className="w-full object-cover transition-transform cursor-pointer duration-24000 ease-linear group-hover:-translate-y-[calc(100%-25rem)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}

                        {/* 2. Section Grille 2 Colonnes (Custom Dev & Maintenance) */}
                        <div className="border border-line border-b-0 flex flex-col md:flex-row items-stretch justify-between">
                            {SERVICES.filter((s) => s.layout === "half").map(
                                (service, index) => (
                                    <div
                                        key={service.id}
                                        className={`group min-h-110 p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-between ${
                                            index === 0
                                                ? "border-b border-e-0 md:border-b-0 md:border-e border-line"
                                                : ""
                                        }`}
                                    >
                                        <div className="w-full flex flex-col gap-3 text-balance">
                                            <Typography
                                                variant="h3"
                                                component="h4"
                                                className="font-haffer-sb tracking-[-0.1rem] text-text"
                                            >
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                variant="body"
                                                component="p"
                                                className="font-haffer-md text-neutral-600"
                                            >
                                                {service.description}
                                            </Typography>
                                            <div className="flex flex-wrap items-center gap-2.5 mt-3">
                                                {service.tags.map(
                                                    (tag, tagIndex) => (
                                                        <Badge
                                                            key={tagIndex}
                                                            variant="solid"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                        <div className="max-w-full mt-10 image-mask relative p-2 border border-line">
                                            <svg className="z-[-1] absolute inset-0 size-full pointer-events-none select-none text-line">
                                                <defs>
                                                    <pattern
                                                        id=":R5taafknq6ja:"
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
                                                    fill="url(#:R5taafknq6ja:)"
                                                ></rect>
                                            </svg>
                                            <div className="h-100 overflow-hidden">
                                                <img
                                                    src={service.image.path}
                                                    alt={service.image.alt}
                                                    loading="lazy"
                                                    className="w-full object-cover transition-transform cursor-pointer duration-24000 ease-linear group-hover:-translate-y-[calc(100%-25rem)]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>

                        {/* 3. Service Full-width (Optimisation web) */}
                        {(() => {
                            const service = SERVICES.find(
                                (s) => s.id === "optimization",
                            );
                            if (!service) return null;
                            return (
                                <div className="group min-h-110 border border-line p-6 md:p-10 flex flex-col md:flex-row gap-10 md:gap-0">
                                    <div className="max-w-full md:max-w-1/2 flex flex-col gap-3 text-balance">
                                        <Typography
                                            variant="h3"
                                            component="h4"
                                            className="font-haffer-sb tracking-[-0.1rem] text-text"
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body"
                                            component="p"
                                            className="font-haffer-md text-neutral-600"
                                        >
                                            {service.description}
                                        </Typography>
                                        <div className="flex flex-wrap items-center gap-2.5 mt-3">
                                            {service.tags.map((tag, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="solid"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="max-w-full md:max-w-1/2 image-mask relative p-2 border border-line">
                                        <svg className="z-[-1] absolute inset-0 size-full pointer-events-none select-none text-line">
                                            <defs>
                                                <pattern
                                                    id=":R5taafknq6ja:"
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
                                                fill="url(#:R5taafknq6ja:)"
                                            ></rect>
                                        </svg>
                                        <div className="h-100 overflow-hidden">
                                            <img
                                                src={service.image.path}
                                                alt={service.image.alt}
                                                loading="lazy"
                                                className="w-full object-cover transition-transform cursor-pointer duration-24000 ease-linear group-hover:-translate-y-[calc(100%-25rem)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </>
                )}
            </div>
        </div>
    );
}
