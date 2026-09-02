import type { JSX } from "react/jsx-runtime";

export default function Copyright(): JSX.Element {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line px-6 py-3.5 font-haffer-r text-sm sm:flex-row">
            <div>© {currentYear} CodeurMDG</div>
            <div className="flex items-center gap-6">
                <a href="#privacy" className="text-neutral-500 hover:text-black">
                    Privacy policy
                </a>
                <a href="#terms" className="text-neutral-500 hover:text-black">
                    Terms of service
                </a>
            </div>
        </div>
    );
}
