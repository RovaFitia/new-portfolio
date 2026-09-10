import type { MouseEventHandler } from "react";

type ButtonProps = {
    variant?: 'solid' | 'ghost' | 'super';
    size?: 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
    href?: string;
    icon?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export type { ButtonProps };
