import { Container } from "@/components/container/Container";
import HeroStats from "@/components/section/hero/HeroStates";
import HeroText from "./HeroText";
import HeroBadge from "./HeroBadge";

export default function Hero() {
    return (
        <section className="hero relative w-full h-auto min-h-167.5 flex flex-col items-center justify-center">
            <Container>
                <div className="w-full text-center mx-auto">
                    {/* Badge */}
                    <HeroBadge />

                    {/* Titre + Text */}
                    <HeroText />

                    {/* States */}
                    <HeroStats />
                </div>
            </Container>
        </section>
    );
}
