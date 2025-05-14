import WhiteLogo from "../logos/WhiteLogo";


export default function BlueFooter() {
    return (
        <footer className="bg-blue-600/85 py-7 flex justify-center space-x-3 text-white">
            <WhiteLogo />
            <p>&copy; {new Date().getFullYear()} genzet. All rights reserved.</p>
        </footer>
    );
}