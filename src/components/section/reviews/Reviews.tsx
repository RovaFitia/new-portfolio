import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import { TrustindexWidget } from "./TrustindexWidget";

export default function Reviews() {
    return (
        <div className="w-full h-auto pt-12 md:pt-20 lg:pt-28" id="reviews">
            <Container className="flex flex-col items-start justify-start md:items-center md:justify-center gap-10">
                <div className="flex flex-col gap-1.5 items-start justify-start md:items-center md:justify-center">
                    <Typography
                        variant="lead"
                        component="div"
                        className="text-primary-400 uppercase font-haffer-r text-center"
                    >
                        // <span className="text-text">Témoignages</span>
                    </Typography>
                    <Typography variant="h2" component="h2" className="leading-none text-left md:text-center">
                        Ils ont écrit
                    </Typography>
                    <Typography
                        variant="body"
                        component="p"
                        className="font-haffer-r text-dark mt-2.5 max-w-3xl text-left md:text-center text-balance"
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
