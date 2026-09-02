import { cn } from "@/utils/cn";
import { ChevronRight } from "lucide-react";
import type { ButtonProps } from "@/types/Button";

const Button = ({ variant = 'solid', size = 'md', className, href, children, icon = false  }: ButtonProps) => {
    const sizes = {
        md: 'px-5 py-[8px] h-[40px] text-[14px] tracking-[0.03rem]',
        lg: 'font-solar-md h-[58px] px-[42px] py-[17px] text-[24px]',
    }

    const base = 'border transition-colors duration-300 ease-in-out rounded-full cursor-pointer flex items-center justify-center gap-2 text-nowrap outline-none'
    const variants = {
        solid: 'border-primary-400 hover:border-text bg-primary-400 hover:bg-text text-text hover:text-white',
        ghost: 'border-text bg-text text-white hover:text-primary-400',
        super: 'border-gray-300 hover:border-text bg-gray-300 hover:bg-text text-text hover:text-white',
    };

    const classes:string = [sizes[size], base, variants[variant], className].filter(Boolean).join(' ');
    const Tag = href ? 'a' : 'button';

    const iconSize = icon ? (size === 'lg' ? 20 : 16) : "";
    const isIcon = icon ? <ChevronRight size={iconSize} /> : null;

    return (
        <Tag href={href} className={`${cn(classes, className)}`}>
            {children} {isIcon}
        </Tag>
    );
}

export default Button;
