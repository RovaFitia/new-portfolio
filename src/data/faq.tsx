type FAQItem = {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: "item-1",
        question: "Pourquoi vous choisir ?",
        answer: "Nous créons des sites web performants, sur-mesure et optimisés. Au-delà d'un design esthétique, nous garantissons une fluidité impeccable, un référencement (SEO) efficace et une expérience utilisateur engageante. De plus, nous vous accompagnons à chaque étape et vous fournissons une formation complète pour administrer votre site en toute autonomie.",
    },
    {
        id: "item-2",
        question:
            "Vous êtes basés à Madagascar, comment gérez-vous le décalage horaire ?",
        answer: "Le décalage horaire ne pose aucun problème dans notre collaboration. Notre équipe réactive s'adapte à vos horaires de travail pour vous garantir un suivi régulier et une communication fluide, quel que soit votre fuseau horaire.",
    },
    {
        id: "item-3",
        question: "Pourquoi vous faire confiance ?",
        answer: "Nos clients disent souvent que travailler avec nous, c'est comme trouver une perle rare sur Internet : nous privilégions la transparence, l'excellence technique et une relation partenariale de confiance.",
    },
    {
        id: "item-4",
        question: "Comment puis-je suivre l’avancement de mon projet ?",
        answer: "Nous utilisons des outils modernes de gestion de projet afin que vous ayez une visibilité totale en temps réel. Vous recevez des mises à jour régulières et pouvez consulter l'état d'avancement de votre site web à tout moment.",
    },
    {
        id: "item-5",
        question: "Quels sont vos tarifs ?",
        answer: "Nos tarifs sont très abordables et s'adaptent selon la complexité et les spécificités de votre projet. Contactez-nous directement pour obtenir un devis personnalisé sans engagement.",
    },
    {
        id: "item-6",
        question: "Garantissez-vous la qualité de vos services ?",
        answer: "Oui, absolument. Chaque projet est réalisé avec rigueur, transparence et professionnalisme. Nous nous engageons à vous livrer des résultats fiables, durables et parfaitement conformes à vos attentes.",
    },
];

export default faqData;
