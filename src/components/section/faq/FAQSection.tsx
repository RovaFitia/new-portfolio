import { Container } from "@/components/container/Container";
import { Typography } from "@/components/ui/Typography";
import FaqList from "./FaqList";

const FAQSection = () => {
    return (
        <div className="w-full h-auto pt-12 md:pt-20 lg:pt-28" id="faq">
            <Container className="flex flex-col gap-10 lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col gap-1.5">
                    <Typography
                        variant="lead"
                        component="div"
                        className="text-primary-400 uppercase font-haffer-r"
                    >
                        // <span className="text-text">FAQ</span>
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        className="leading-none text-pretty md:text-balance"
                    >
                        Trouvez les réponses aux questions courantes
                    </Typography>
                </div>

                {/* Reviews grid */}
                <div className="w-full lg:w-1/2 border border-line ">
                    <FaqList />
                </div>
            </Container>
        </div>
    );
};

export default FAQSection;
