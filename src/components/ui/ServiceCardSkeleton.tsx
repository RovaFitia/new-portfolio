// Composant Skeleton reprenant exactement le layout et les bordures des cartes réelles
export const ServiceCardSkeleton = () => {
    return (
        <div className="animate-pulse w-full">
            {/* 1. Full-width Skeleton */}
            <div className="min-h-110 border border-line p-6 md:p-10 border-b-0 flex flex-col md:flex-row gap-10 md:gap-0">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="h-8 bg-neutral-200 rounded w-1/2"></div>
                    <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                    <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
                    <div className="flex gap-2.5 mt-3">
                        <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                        <div className="h-6 w-20 bg-neutral-200 rounded-full"></div>
                        <div className="h-6 w-14 bg-neutral-200 rounded-full"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2 border border-line">
                    <div className="h-100 bg-neutral-200 w-full rounded"></div>
                </div>
            </div>

            {/* 2. Half-width Grille (2 Colonnes) Skeleton */}
            <div className="border border-line border-b-0 flex flex-col md:flex-row items-stretch justify-between">
                <div className="min-h-110 p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-between border-b md:border-b-0 md:border-e border-line">
                    <div className="w-full flex flex-col gap-4">
                        <div className="h-8 bg-neutral-200 rounded w-1/2"></div>
                        <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                        <div className="flex gap-2.5 mt-3">
                            <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                            <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                        </div>
                    </div>
                    <div className="mt-10 p-2 border border-line">
                        <div className="h-60 bg-neutral-200 w-full rounded"></div>
                    </div>
                </div>

                <div className="min-h-110 p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-between">
                    <div className="w-full flex flex-col gap-4">
                        <div className="h-8 bg-neutral-200 rounded w-1/2"></div>
                        <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                        <div className="flex gap-2.5 mt-3">
                            <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                            <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                        </div>
                    </div>
                    <div className="mt-10 p-2 border border-line">
                        <div className="h-60 bg-neutral-200 w-full rounded"></div>
                    </div>
                </div>
            </div>

            {/* 3. Full-width Bottom Skeleton */}
            <div className="min-h-110 border border-line p-6 md:p-10 flex flex-col md:flex-row gap-10 md:gap-0">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="h-8 bg-neutral-200 rounded w-1/2"></div>
                    <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                    <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
                    <div className="flex gap-2.5 mt-3">
                        <div className="h-6 w-16 bg-neutral-200 rounded-full"></div>
                        <div className="h-6 w-20 bg-neutral-200 rounded-full"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2 border border-line">
                    <div className="h-100 bg-neutral-200 w-full rounded"></div>
                </div>
            </div>
        </div>
    );
}
