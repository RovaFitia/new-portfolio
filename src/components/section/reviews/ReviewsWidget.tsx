import React, { useRef, useState } from "react";
import reviewsData from "@/data/reviews.json";
import { GoogleGIcon, StarIcon, VerifiedBadge } from "./IconsReviews";
import { Typography } from "@/components/ui/Typography";

export type ReviewItem = {
    review_id: string;
    author_title: string;
    author_image: string;
    review_rating: number;
    review_text: string;
    review_datetime_utc: string;
};

export const ReviewsWidget: React.FC<{ className?: string }> = ({
    className = "",
}) => {
    const reviews: ReviewItem[] = reviewsData as ReviewItem[];
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [expandedReviews, setExpandedReviews] = useState<
        Record<string, boolean>
    >({});

    const toggleExpand = (id: string) => {
        setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    // Met à jour le dot actif selon la position précise
    const handleScroll = () => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            const container = scrollRef.current;
            const firstChild = container.children[0] as HTMLElement;
            const cardWidth = firstChild.offsetWidth + 16;
            const index = Math.round(container.scrollLeft / cardWidth);
            setActiveIndex(Math.min(Math.max(0, index), reviews.length - 1));
        }
    };

    // Défilement via flèches (Tablette / Desktop)
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Défilement exact vers la review ciblée (Clic sur un Dot)
    const scrollToIndex = (index: number) => {
        if (scrollRef.current && scrollRef.current.children[index]) {
            const targetCard = scrollRef.current.children[index] as HTMLElement;
            scrollRef.current.scrollTo({
                left: targetCard.offsetLeft,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className={`w-full py-8 ${className}`}>
            <div className="relative max-w-6xl mx-auto px-4 group">
                {/* Flèche Gauche */}
                <button
                    onClick={() => scroll("left")}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md border border-gray-100 items-center justify-center text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
                    aria-label="Avis précédents"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Flèche Droite */}
                <button
                    onClick={() => scroll("right")}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md border border-gray-100 items-center justify-center text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
                    aria-label="Avis suivants"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Slider / Liste défilable */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-4 snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {reviews.map((review) => {
                        const isLong = review.review_text.length > 90;
                        const isExpanded = expandedReviews[review.review_id];

                        return (
                            <div
                                key={review.review_id}
                                className="snap-start shrink-0 w-70 sm:w-[320px] bg-white rounded-xs p-5 flex flex-col justify-between border border-black/5"
                            >
                                <div>
                                    {/* En-tête */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="relative shrink-0">
                                            <img
                                                src={review.author_image}
                                                alt={review.author_title}
                                                className="w-11 h-11 rounded-full object-cover"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-xs border border-gray-100">
                                                <GoogleGIcon />
                                            </div>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-1.5">
                                                <Typography
                                                    variant="h4"
                                                    component="h4"
                                                    className="text-gray-800 text-sm truncate"
                                                >
                                                    {review.author_title}
                                                </Typography>
                                                <div
                                                    title="Client vérifié"
                                                    className="inline-flex items-center"
                                                >
                                                    <VerifiedBadge />
                                                </div>
                                            </div>
                                            <Typography
                                                variant="lead"
                                                component="div"
                                                className="text-xs text-gray-500"
                                            >
                                                {review.review_datetime_utc}
                                            </Typography>
                                        </div>
                                    </div>

                                    {/* Étoiles */}
                                    <div className="flex items-center gap-0.5 mb-3">
                                        {Array.from({
                                            length: review.review_rating,
                                        }).map((_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </div>

                                    {/* Contenu */}
                                    <div className="text-gray-800 text-sm leading-relaxed tracking-tight">
                                        <p
                                            className={
                                                !isExpanded && isLong
                                                    ? "line-clamp-3"
                                                    : ""
                                            }
                                            dangerouslySetInnerHTML={{
                                                __html: review.review_text,
                                            }}
                                        />
                                        {isLong && (
                                            <button
                                                onClick={() =>
                                                    toggleExpand(
                                                        review.review_id,
                                                    )
                                                }
                                                className="text-blue-600 hover:underline font-medium text-xs mt-1 block cursor-pointer"
                                            >
                                                {isExpanded
                                                    ? "Voir moins"
                                                    : "Lire plus"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dots de pagination */}
                <div className="flex md:hidden justify-center items-center gap-2 mt-4 flex-wrap max-w-xs mx-auto">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            aria-label={`Voir l'avis ${idx + 1}`}
                            className={`block rounded-full transition-all duration-300 cursor-pointer ${
                                idx === activeIndex
                                    ? "w-2.5 h-2.5 bg-gray-800"
                                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsWidget;
