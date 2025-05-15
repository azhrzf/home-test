import { ReactNode } from "react";
import WhiteHeader from "@/components/common/header/WhiteHeader"
import BlueFooter from "@/components/common/footer/BlueFooter"

interface BasicWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function BasicWrapper({ children, className }: BasicWrapperProps) {
    return (
        <div className={`flex min-h-screen flex-col ${className}`}>
            <WhiteHeader />
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            <BlueFooter />
        </div >
    );
}
