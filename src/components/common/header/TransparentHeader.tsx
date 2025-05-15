"use client";

import { useEffect, useState } from "react";
import BlueLogo from "../logo/BlueLogo";
import HeaderPorofile from "./header-profile";
import WhiteLogo from "../logo/WhiteLogo";
import clsx from "clsx";

export default function TransparentHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300",
                isScrolled
                    ? "bg-white border-slate-200"
                    : "bg-white lg:bg-transparent border-transparent"
            )}
        >
            <div className="max-w-7xl flex items-center justify-between mx-auto px-5 py-4">
                <div className="hidden lg:block">
                    {isScrolled ? <BlueLogo /> : <WhiteLogo />}
                </div>
                <div className="block lg:hidden">
                    <BlueLogo />
                </div>
                <HeaderPorofile textColor={isScrolled ? "slate-900" : "white"} />
            </div>
        </header>
    );
}
