import "./index.scss";
import type { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"div"> {
    label: string
}

export default function Section({
    children,
    className = "",
    label,
    ...props
}: SectionProps) {
    return (
        <div 
            className={`section ${className}`}
            { ...props }
        >
            <p className="section-label">
                { label }
            </p>

            { children }
        </div>
    );
}