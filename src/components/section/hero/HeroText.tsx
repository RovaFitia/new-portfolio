import { useTranslation } from "react-i18next";
import { Typography } from "@/components/ui/Typography";

export default function HeroText() {
    const { t } = useTranslation();
    return (
        <>
            <Typography
                variant="h1"
                component="h1"
                className="font-pixel text-[clamp(48px, 16vw, 72px)] lg:text-[clamp(58px,7.4vw+106.56px,118px)] tracking-[-0.06em] leading-[.9] flex flex-col"
            >
                <span>{ t("hero.title")}</span>
                <span className="hero-accent text-primary-600">
                    { t("hero.titleColor")}
                </span>
            </Typography>

            <Typography
                variant="body"
                component="p"
                className="max-w-2xl mx-auto mt-8 text-neutral-600"
            >
                { t("hero.text")}
            </Typography>
        </>
    );
}
