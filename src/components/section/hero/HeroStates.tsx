import { STATS } from "@/data/data";
import { Typography } from "@/components/ui/Typography";

export default function HeroStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full mx-auto max-w-200 mt-16 border border-line">
            {STATS.map((stat, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-[2px] min-h-20 border-t sm:border-t-0 sm:border-l first:border-t-0 sm:first:border-l-0 border-line py-4 sm:py-0"
                >
                    <Typography
                        variant="h4"
                        component="span"
                        className="text-dark"
                    >
                        {" "}
                        + {stat.value}
                    </Typography>
                    <Typography
                        variant="lead"
                        component="span"
                        className="text-dark font-haffer-r"
                    >
                        {stat.label}
                    </Typography>
                </div>
            ))}
        </div>
    );
}
