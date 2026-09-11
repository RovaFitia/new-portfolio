import React, { useState, type ReactNode } from "react";

interface AccordionContextType {
    openValue: string | null;
    toggleValue: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

// --- ACCORDION ROOT ---
interface AccordionProps {
    children: ReactNode;
    className?: string;
    defaultValue?: string;
}

export function Accordion({
    children,
    className = "",
    defaultValue = "",
}: AccordionProps) {
    const [openValue, setOpenValue] = useState<string | null>(defaultValue);

    const toggleValue = (value: string) => {
        setOpenValue((prev) => (prev === value ? null : value));
    };

    return (
        <AccordionContext.Provider value={{ openValue, toggleValue }}>
            <div
                data-slot="accordion"
                className={`flex w-full flex-col ${className}`}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

// --- ACCORDION ITEM ---
interface AccordionItemProps {
    value: string;
    children: ReactNode;
    className?: string;
}

const AccordionItemContext = React.createContext<{
    value: string;
    isOpen: boolean;
}>({
    value: "",
    isOpen: false,
});

export function AccordionItem({
    value,
    children,
    className = "",
}: AccordionItemProps) {
    const context = React.useContext(AccordionContext);
    if (!context)
        throw new Error("AccordionItem doit être utilisé dans Accordion");

    const isOpen = context.openValue === value;

    return (
        <AccordionItemContext.Provider value={{ value, isOpen }}>
            <div
                data-slot="accordion-item"
                className={`not-last:border-b border-line px-4 ${className}`}
            >
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
}

// --- ACCORDION TRIGGER ---
interface AccordionTriggerProps {
    children: ReactNode;
    className?: string;
}

export function AccordionTrigger({
    children,
    className = "",
}: AccordionTriggerProps) {
    const rootContext = React.useContext(AccordionContext);
    const itemContext = React.useContext(AccordionItemContext);

    if (!rootContext)
        throw new Error("AccordionTrigger doit être utilisé dans Accordion");

    const { isOpen, value } = itemContext;

    return (
        <div className="flex">
            <button
                type="button"
                data-slot="accordion-trigger"
                aria-expanded={isOpen}
                onClick={() => rootContext.toggleValue(value)}
                className={`group/accordion-trigger relative flex flex-1 items-center justify-between py-4 text-left text-base font-haffer-md transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer ${className}`}
            >
                {children}

                {/* SVG Chevron Down (masqué quand ouvert) */}
                {!isOpen && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none ml-auto size-4 shrink-0 text-gray-600"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                )}

                {/* SVG Chevron Up (affiché quand ouvert) */}
                {isOpen && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none ml-auto size-4 shrink-0 text-neutral-600"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                )}
            </button>
        </div>
    );
}

// --- ACCORDION CONTENT ---
interface AccordionContentProps {
    children: ReactNode;
    className?: string;
}

export function AccordionContent({
    children,
    className = "",
}: AccordionContentProps) {
    const { isOpen } = React.useContext(AccordionItemContext);

    return (
        <div
            data-slot="accordion-content"
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
            }`}
        >
            <div className="overflow-hidden">
                <div
                    className={`pt-0 pb-4 text-sm text-neutral-600 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4 ${className}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
