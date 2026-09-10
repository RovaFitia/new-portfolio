import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import ProjectsList from "./ProjectsList";

export default function Portfolio() {
    return (
        <div className="w-full h-auto pt-12 md:pt-20 lg:pt-28" id="portfolio">
            <Container>
                <div className="flex flex-col gap-1.5">
                    <Typography
                        variant="lead"
                        component="div"
                        className="text-primary-400 uppercase font-haffer-r"
                    >
                        // <span className="text-text">Portfolio</span>
                    </Typography>
                    <Typography variant="h2" component="h2" className="leading-none">
                        Mes réalisations témoignent
                    </Typography>
                    <Typography
                        variant="body"
                        component="p"
                        className="font-haffer-r text-dark text-balance mt-2.5"
                    >
                        Mes réalisations couvrent une large variété de secteurs
                        à l'international. Chaque projet est conçu pour refléter
                        l'identité unique de nos clients et renforcer leur
                        présence en ligne.
                    </Typography>
                </div>

                <ProjectsList />

            </Container>
        </div>
    );
}
