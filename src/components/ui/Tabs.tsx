import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { TABS_DATA } from "@/data/data";
import { Typography } from "./Typography";

const SORTED_TABS = [...TABS_DATA].sort((a, b) => Number(b.id) - Number(a.id));

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(SORTED_TABS[0]?.id || "");
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        e.preventDefault();
        const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;

        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    return (
        <div className="w-full mt-10">
            <div className="relative flex items-center border-b border-line bg-paper/50">
                <div
                    onScroll={handleScroll}
                    className="flex overflow-x-auto no-scrollbar w-full"
                >
                    {SORTED_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 px-4 md:px-10 font-solar-md transition-all duration-200 border-t border-s border-e min-w-22.5 shrink-0 cursor-pointer text-nowrap ${
                                activeTab === tab.id
                                    ? "bg-text text-primary-400 border-line"
                                    : "text-muted-foreground hover:text-foreground border-transparent"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {canScrollRight && (
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-1 bg-linear-to-l from-paper via-paper/80 to-transparent pl-6 sm:hidden text-muted-foreground transition-opacity duration-300">
                        <ChevronRight size={18} className="w-4 h-4 animate-pulse" />
                    </div>
                )}
            </div>

            {/* Contenu de l'onglet actif */}
            <div className="p-6 md:p-10 border-x border-b border-line">
                {SORTED_TABS.map((tab) =>
                    tab.id === activeTab ? (
                        <div
                            key={tab.id}
                            className="space-y-3 text-center sm:text-left max-w-full w-full"
                        >
                            <Typography
                                variant="h4"
                                component="h3"
                                className="text-text"
                            >
                                {tab.title}
                            </Typography>
                            <Typography
                                variant="body"
                                component="p"
                                className="text-dark font-haffer-r text-pretty"
                            >
                                {tab.content}
                            </Typography>
                        </div>
                    ) : null,
                )}
            </div>
        </div>
    );
}
