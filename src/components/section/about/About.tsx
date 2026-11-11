import { useTranslation } from "react-i18next";
import { Container } from "@/components/container/Container";
import HangingIdCard from "@/components/ui/HangingIdCard";
import Tabs from "@/components/ui/Tabs";
import { Typography } from "@/components/ui/Typography";
import { Profile } from "@/data";

export default function About() {
    const { t } = useTranslation();
    return (
        <section className="w-full h-auto pt-12 md:pt-0">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                    <div className="flex flex-col gap-4 order-2 md:order-1">
                        <div className="flex flex-col gap-1.5">
                            <Typography
                                variant="lead"
                                component="div"
                                className="text-primary-400 uppercase font-haffer-r"
                            >
                                // <span className="text-text">{t("about.ancre")}</span>
                            </Typography>
                            <Typography variant="h2" component="h2" className="leading-none">
                                {t("about.title")}
                            </Typography>
                        </div>
                        <div className="max-w-2xl flex flex-col gap-4 mt-2.5">
                            <Typography
                                variant="body"
                                component="p"
                                className="font-haffer-r text-dark text-balance"
                            >
                                {t("about.desc1")}
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="font-haffer-r text-dark"
                            >
                                {t("about.desc2")}
                            </Typography>
                        </div>
                    </div>

                    <div className="md:max-w-2/5 order-1 md:order-2 w-full pt-8 flex items-center justify-center">
                        <HangingIdCard
                            name="Rova"
                            role="Web Developer"
                            badgeId="LW-2026"
                            ropeLength={30}
                            profile={Profile}
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-10">
                    <Tabs />
                </div>
            </Container>
        </section>
    );
}
