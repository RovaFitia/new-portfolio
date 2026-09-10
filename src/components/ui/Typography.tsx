import { cn } from "@/utils/cn";
import type { TypographyProps } from "@/types/Typography";

export const Typography = ({ variant = 'h2', component: Component = "div", theme = 'secondary', className, children }: TypographyProps) => {

    let variantStyle : string = "", colorStyle : string = ""

    switch (variant) {
        case "display":
            variantStyle = "font-pixel text-[106.56px] tracking-[-0.06em]"
            break;

        case "h1":
            variantStyle = "font-solar-md text-[65px]"
            break;

        case "h2":
            variantStyle = "font-solar-md text-[50px]"
            break;

        case "h3":
            variantStyle = "font-solar-md text-[26px]"
            break;

        case "h4":
            variantStyle = "font-solar-md text-[20.96px]"
            break;

        case "lead":
            variantStyle = "text-[13.6px]"
            break;

        case "body":
            variantStyle = "text-[17px] leading-[140%]"
            break;
    }

    switch(theme) {
        case "black" : //default
            colorStyle = "text-black"
            break

        case "grey" :
            colorStyle = "text-dark"
            break

        case "white" :
            colorStyle = "text-white"
            break

        case "primary" :
            colorStyle = "text-primary-400"
            break

        case "secondary" :
            colorStyle = "text-text"
            break
    }

    return (
        <Component className={cn(
            variantStyle,
            colorStyle ,
            className
        )}>{children}</Component>
    )
}
