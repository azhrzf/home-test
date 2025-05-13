import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="bg-blue-600/85 py-7 flex justify-center space-x-3 text-white">
            <Logo />
            <p>&copy; {new Date().getFullYear()} genzet. All rights reserved.</p>
        </footer>
    );
}