import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import ServiceCard from "./ServiceCard";

export default function Service() {
    return (
        <div className="w-full h-auto py-24">
            <Container>
                <div className="flex flex-col gap-1.5">
                    <Typography
                        variant="lead"
                        component="div"
                        className="text-primary-400 uppercase font-haffer-r"
                    >
                        // <span className="text-text">Services</span>
                    </Typography>
                    <Typography variant="h2" component="h2">
                        Collaborons ensemble
                    </Typography>
                    <Typography
                        variant="body"
                        component="p"
                        className="font-haffer-r text-dark text-balance"
                    >
                        Je conçois des solutions digitales sur mesure qui allient design moderne, performance technique et fiabilité, afin de renforcer la visibilité et la croissance de votre entreprise en ligne.
                    </Typography>
                </div>

                {/* Services grid */}

                <ServiceCard />
            </Container>
        </div>
    );
}
