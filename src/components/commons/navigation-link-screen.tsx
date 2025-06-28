import { Link } from "react-router-dom";

interface NavigationLinkScreenProps {
    to: string;
    text: string;
    path: string;
}

export default function NavigationLinkScreen({to, text, path}: NavigationLinkScreenProps) {
    return (
        <div className="mt-4">
            <p className="text-center text-gray-600 text-sm">
                {to}{" "}
                <Link to={path} className="text-green-600 hover:underline">
                    {text}
                </Link>
            </p>
        </div>
    );
}
