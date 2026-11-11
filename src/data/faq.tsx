import { useTranslation } from "react-i18next";

type FAQItem = {
    id: string;
    question: string;
    answer: string;
}

function useFaqData(): FAQItem[] {
    const { t } = useTranslation();

    return [
        {
            id: "item-1",
            question: t("faqList.item1.question"),
            answer: t("faqList.item1.answer"),
        },
        {
            id: "item-2",
            question: t("faqList.item2.question"),
            answer: t("faqList.item2.answer"),
        },
        {
            id: "item-3",
            question: t("faqList.item3.question"),
            answer: t("faqList.item3.answer"),
        },
        {
            id: "item-4",
            question: t("faqList.item4.question"),
            answer: t("faqList.item4.answer"),
        },
        {
            id: "item-5",
            question: t("faqList.item5.question"),
            answer: t("faqList.item5.answer"),
        },
        {
            id: "item-6",
            question: t("faqList.item6.question"),
            answer: t("faqList.item6.answer"),
        },
    ];
}
export default useFaqData;
