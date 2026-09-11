import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import ServiceCard from "./ServiceCard";
import Button from "@/components/ui/Button";

export default function Service() {
    return (
        <div className="w-full h-auto pt-12 md:pt-20 lg:pt-28" id="services">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
                    <div className="w-full flex flex-col gap-1.5">
                        <Typography
                            variant="lead"
                            component="div"
                            className="text-primary-400 uppercase font-haffer-r"
                        >
                            // <span className="text-text">Services</span>
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h2"
                            className="leading-none"
                        >
                            Collaborons ensemble
                        </Typography>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <Typography
                            variant="body"
                            component="p"
                            className="font-haffer-r text-dark text-balance mt-2.5"
                        >
                           Je conçois et développe des solutions digitales sur mesure adaptées à chaque besoin.
                        </Typography>
                        <Button variant="super" className="w-fit group">
                            Collaborer avec moi
                            <svg
                                className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                <ServiceCard />
            </Container>
        </div>
    );
}
