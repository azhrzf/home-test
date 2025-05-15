import BlueLogo from "../logo/BlueLogo";
import HeaderPorofile from "./header-profile";

export default function WhiteHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white w-full border-b border-slate-200">
            <div className="max-w-7xl flex items-center justify-between mx-auto px-5 py-4">
                <BlueLogo />
                <HeaderPorofile />
            </div>
        </header>
    );
}