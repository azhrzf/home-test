import { ReactNode } from "react";
import TransparentHeader from "@/components/common/header/TransparentHeader"
import BlueFooter from "@/components/common/footer/BlueFooter"

interface BasicWrapperProps {
    children: ReactNode;
}

export default function HomeWrapper({ children }: BasicWrapperProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <TransparentHeader />
            <main className="flex-grow">
                {children}
            </main>
            <BlueFooter />
        </div >
    );
}
