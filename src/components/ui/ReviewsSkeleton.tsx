const ReviewsSkeleton: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse w-full">
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className="p-5 border border-line bg-white/80 flex flex-col justify-between gap-4 h-50"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-300 shrink-0" />
                        <div className="flex-1 space-y-2">
                            <div className="h-3.5 bg-slate-300 w-2/3 rounded" />
                            <div className="h-2.5 bg-slate-200 w-1/3 rounded" />
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, starIndex) => (
                            <div
                                key={starIndex}
                                className="w-4 h-4 bg-slate-300 rounded-xs"
                            />
                        ))}
                    </div>
                    <div className="space-y-2">
                        <div className="h-3 bg-slate-200 w-full rounded" />
                        <div className="h-3 bg-slate-200 w-4/5 rounded" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewsSkeleton;
