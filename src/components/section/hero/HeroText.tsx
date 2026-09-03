import { Typography } from "@/components/ui/Typography";

export default function HeroText() {
    return (
        <>
            <Typography
                variant="h1"
                component="h1"
                className="font-pixel text-[clamp(58px,7.4vw+106.56px,118px)] tracking-[-0.06em] leading-[.9] flex flex-col"
            >
                <span>Un site web</span>
                <span className="text-primary-600">
                    votre meilleur atout
                </span>
            </Typography>

            <Typography
                variant="body"
                component="p"
                className="max-w-2xl mx-auto mt-8 text-neutral-600"
            >
                Vous n’êtes pas ici par hasard.Vous êtes au bon endroit
                pour donner à votre projet la visibilité qu’il mérite.
            </Typography>
        </>
    );
}
