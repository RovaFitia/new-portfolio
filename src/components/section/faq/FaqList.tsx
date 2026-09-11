import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/AccordionItem";
import faqData from "@/data/faq";

const FaqList = () => {
    return (
        <Accordion defaultValue="item-1">
            {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                        <p>{faq.answer}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default FaqList;
