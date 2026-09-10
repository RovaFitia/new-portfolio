type TypographyProps = {
    variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "lead"
    | "body";

    component?: | "h1" | "h2" | "h3" | "h4" | "div" | "p" | "span";
    theme?: | "black" | "grey" | "white" | "primary" | "secondary" ;
    className?: string ;
    children: React.ReactNode
}

export type { TypographyProps }
