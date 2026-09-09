import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import { ProjectCardSkeleton } from "@/components/ui/ProjectCardSkeleton";
import PROJECTS from "@/data/portfolio";
import { useEffect, useState } from "react";

export default function ProjectsList() {
    const [isLoading, setIsLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    // Simulation du chargement initial des données
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Ajustez la durée selon vos besoins réels d'API
        return () => clearTimeout(timer);
    }, []);

    // 1. Les 6 premiers projets
    const visibleProjects = PROJECTS.slice(0, 6);
    // 2. Les projets restants
    const hiddenProjects = PROJECTS.slice(6);

    return (
        <div className="w-full mt-10">
            {/* Grille des 6 premiers projets / Skeletons */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {isLoading
                    ? // Affiche 6 Skeletons pendant le chargement
                      Array.from({ length: 6 }).map((_, index) => (
                          <ProjectCardSkeleton key={`skeleton-${index}`} />
                      ))
                    : // Affiche les 6 premières cartes une fois le chargement terminé
                      visibleProjects.map((project) => (
                          <ProjectCard
                              key={project.id}
                              imageSrc={project.image}
                              title={project.title}
                              href={project.link}
                          />
                      ))}
            </div>

            {/* Conteneur des projets restants avec transition de hauteur CSS Grid */}
            {!isLoading && (
                <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                    <div className="overflow-hidden">
                        <div
                            className={`transition-[mask-image] duration-500 ${
                                !isExpanded ? "relative" : ""
                            }`}
                            style={{
                                WebkitMaskImage: !isExpanded
                                    ? "radial-gradient(100% 95% at 50% 35%, rgb(0, 0, 0) 44.7477%, rgba(0, 0, 0, 0) 100%)"
                                    : "none",
                                maskImage: !isExpanded
                                    ? "radial-gradient(100% 95% at 50% 35%, rgb(0, 0, 0) 44.7477%, rgba(0, 0, 0, 0) 100%)"
                                    : "none",
                            }}
                        >
                            {/* Grille interne pour les projets cachés */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6">
                                {hiddenProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`${isExpanded ? "animate-card-in" : "opacity-0"}`}
                                        style={
                                            {
                                                "--animation-delay": `${index * 50}ms`,
                                            } as React.CSSProperties
                                        }
                                    >
                                        <ProjectCard
                                            imageSrc={project.image}
                                            title={project.title}
                                            href={project.link}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bouton Voir Plus / Voir Moins (Masqué pendant le chargement) */}
            {!isLoading && hiddenProjects.length > 0 && (
                <div className="flex justify-center mt-12">
                    <Button
                        icon={true}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "Voir moins" : "Voir plus"}
                    </Button>
                </div>
            )}
        </div>
    );
}
