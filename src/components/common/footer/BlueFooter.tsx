import WhiteLogo from "../logo/WhiteLogo";

export default function BlueFooter() {
    return (
        <footer className="bg-blue-600/85 py-7 flex flex-col lg:flex-row items-center justify-center space-y-3 lg:space-y-0 *:lg:space-x-3 text-white">
            <WhiteLogo />
            <p>&copy; {new Date().getFullYear()} genzet. All rights reserved.</p>
        </footer>
    );
}
