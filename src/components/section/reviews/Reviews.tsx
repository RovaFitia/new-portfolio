import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import { TrustindexWidget } from "./TrustindexWidget";

export default function Reviews() {
    return (
        <div className="w-full h-auto pt-12 md:pt-20 lg:pt-28" id="reviews">
            <Container>
                <div className="flex flex-col gap-1.5">
                    <Typography
                        variant="lead"
                        component="div"
                        className="text-primary-400 uppercase font-haffer-r"
                    >
                        // <span className="text-text">Témoignages</span>
                    </Typography>
                    <Typography variant="h2" component="h2" className="leading-none">
                        Ils ont écrit
                    </Typography>
                    <Typography
                        variant="body"
                        component="p"
                        className="font-haffer-r text-dark text-balance mt-2.5"
                    >
                        Découvrez certains des avis reçus, extraits de témoignages représentatifs des clients satisfaits.
                    </Typography>
                </div>

                {/* Reviews grid */}
                <TrustindexWidget />
            </Container>
        </div>
    );
}
