import { useTranslation } from "react-i18next";
import { Typography } from "@/components/ui/Typography";

const ContactInfo = () => {
    const { t } = useTranslation();
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
                {t("contact.title")}
            </Typography>
            <Typography
                variant="body"
                component="p"
                className="font-haffer-r text-dark text-pretty mt-2.5"
            >
               {t("contact.text")}
            </Typography>
        </div>
    )
}

export default ContactInfo;
