import { Container } from "@/components/container/Container";
import { ContactForm } from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
    return (
        <section id="cta" className="w-full h-auto pt-30 pb-20">
            <Container>
                <div className="flex flex-col items-center gap-10">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
