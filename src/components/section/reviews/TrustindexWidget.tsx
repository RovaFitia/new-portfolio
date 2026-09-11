import ReviewsSkeleton from "@/components/ui/ReviewsSkeleton";
import React, { useEffect, useRef, useState } from "react";

export type TrustindexWidgetProps = {
    widgetId?: string;
    className?: string;
};

export const TrustindexWidget: React.FC<TrustindexWidgetProps> = ({
    widgetId = "f4b33e581a47205ae6665d86268",
    className = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const containerNode = containerRef.current;
        if (!containerNode) return;

        containerNode.innerHTML = "";
        setIsLoading(true);

        const observer = new MutationObserver((_, obs) => {
            if (
                containerNode.children.length > 0 &&
                containerNode.offsetHeight > 50
            ) {
                setTimeout(() => {
                    setIsLoading(false);
                }, 250);
                obs.disconnect();
            }
        });

        observer.observe(containerNode, {
            childList: true,
            subtree: true,
            attributes: true,
        });

        const script = document.createElement("script");
        script.src = `https://cdn.trustindex.io/loader.js?${widgetId}`;
        script.async = true;
        script.defer = true;

        // Événement d'échec du chargement réseau (hors ligne, bloqueur de pub, CDN down)
        script.onerror = () => {
            setIsLoading(true); // Conserve le skeleton visible
            observer.disconnect();
        };

        containerNode.appendChild(script);

        // Fallback de sécurité : si rien ne s'est passé après 8s (et pas d'erreur explicite),
        // on conserve le Skeleton plutôt que d'afficher du vide.
        const fallbackTimer = setTimeout(() => {
            if (
                containerNode.children.length === 0 ||
                containerNode.offsetHeight <= 50
            ) {
                setIsLoading(true); // Laisse le skeleton si le DOM n'a pas été construit
            }
        }, 8000);

        return () => {
            observer.disconnect();
            clearTimeout(fallbackTimer);
            if (containerNode) {
                containerNode.innerHTML = "";
            }
        };
    }, [widgetId]);

    return (
        <section className={`w-full mt-10 ${className}`}>
            <div className="relative min-h-50 overflow-x-hidden">
                {isLoading && (
                    <div className="absolute inset-0 z-10 transition-opacity duration-300">
                        <ReviewsSkeleton />
                    </div>
                )}

                <div
                    ref={containerRef}
                    className={`w-full transition-opacity duration-300 ${
                        isLoading ? "opacity-0" : "opacity-100"
                    }`}
                />
            </div>
        </section>
    );
};
