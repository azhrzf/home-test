import { ReactNode } from "react";

interface DefaultContainerProps {
    children: ReactNode;
    className?: string;
}

export default function DefaultContainer({ children, className }: DefaultContainerProps) {
    return (
        <div className={`max-w-7xl mx-auto px-5 ${className}`}>
            {children}
        </div>
    );
}
