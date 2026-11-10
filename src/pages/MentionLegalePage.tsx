import { useTranslation } from "react-i18next";
import { Container } from "@/components/container/Container";
import { SEO } from "@/components/seo/SEO";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { Link } from "react-router-dom";

export const MentionLegalePage: React.FC = () => {
    const { t } = useTranslation();
    const lastUpdated = t("metionLegal.updateTime");


    return (
        <>
            <SEO
                title={t("metionLegal.seo.title")}
                description={t("metionLegal.seo.title")}
            />
            <main className="min-h-screen bg-paper text-text py-16">
                <Container className="max-w-3xl">
                    {/* En-tête */}
                    <div className="border-b border-line pb-8 mb-10">
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm font-medium text-dark hover:text-black mb-6 transition-colors tracking-tight"
                        >
                            ← {t("metionLegal.back")}
                        </Link>
                        <Typography
                            variant="h1"
                            component="h1"
                            className="tracking-tight leading-none text-text mb-4"
                        >
                            {t("metionLegal.title")}
                        </Typography>
                        <p className="text-sm  text-dark tracking-tight">
                            {t("metionLegal.update")} <time>{lastUpdated}</time>
                        </p>
                    </div>

                    {/* Contenu textuel */}
                    <div className="space-y-10 text-base leading-relaxed text-neutral-600">
                        {/* Section 1 */}
                        <section className="space-y-3">
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-tight text-text mb-3"
                            >
                               {t("metionLegal.description.note1")}
                            </Typography>
                        </section>
                        <section className="space-y-3 text-[13.8px]">
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                <span className="text-text text-[18px] font-solar-md tracking-wide underline">
                                    {t("metionLegal.description.property")} :
                                </span>{" "}
                                Codeurmdg
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                <span className="text-text text-[18px] font-solar-md tracking-wide underline">
                                    {t("metionLegal.description.address")} :
                                </span>{" "}
                                IVJ 22 RA Ambohimiadana Avaratra
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                <span className="text-text text-[18px] font-solar-md tracking-wide underline">
                                    {t("metionLegal.description.nif")} :
                                </span>{" "}
                                3019 012 620
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                <span className="text-text text-[18px] font-solar-md tracking-wide underline">
                                    {t("metionLegal.description.stat")} :
                                </span>{" "}
                                63122 11 2024 0 08 323
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                <span className="text-text text-[18px] font-solar-md tracking-wide underline">
                                    {t("metionLegal.description.email")} :
                                </span>{" "}
                                codeurmdg@gmail.com
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                <span className="text-text text-[18px] font-solar-md tracking-wide underline">
                                    {t("metionLegal.description.creator")} :
                                </span>{" "}
                                ANDRIAMBELOMANGA Rovampitiavana Ravakiniana
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                <span className="text-text text-[18px] font-solar-md tracking-wide underline">
                                    {t("metionLegal.description.hebergement")} :
                                </span>{" "}
                                {t("metionLegal.description.hebergementText")}{" "}
                                <a
                                    href="https://vercel.com"
                                    target="_blank"
                                    className="underline"
                                >
                                    Vercell
                                </a>
                            </Typography>
                        </section>
                        <section className="space-y-3">
                            <Typography
                                variant="body"
                                component="p"
                                className="tracking-normal text-text mb-3"
                            >
                                {t("metionLegal.description.note2")}
                            </Typography>
                        </section>
                    </div>
                </Container>
            </main>
        </>
    );
};

export default MentionLegalePage;
