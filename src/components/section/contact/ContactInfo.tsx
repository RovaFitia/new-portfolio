import { Typography } from "@/components/ui/Typography";

const ContactInfo = () => {
    return (
        <div className="w-full flex flex-col items-start md:items-center  gap-1.5">
            <Typography
                variant="lead"
                component="div"
                className="text-primary-400 uppercase font-haffer-r"
            >
                // <span className="text-text">Contact</span>
            </Typography>
            <Typography
                variant="h2"
                component="h2"
                className="leading-none text-pretty text-left md:text-balance md:text-center"
            >
                Collaborons ensemble
            </Typography>
            <Typography
                variant="body"
                component="p"
                className="font-haffer-r text-dark text-pretty mt-2.5"
            >
                Je serais ravis d'avoir de vos nouvelles. Veuillez remplir ce formulaire.
            </Typography>
        </div>
    )
}

export default ContactInfo;
