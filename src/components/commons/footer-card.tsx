import { FaGoogle, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";
import { GitBranch } from "lucide-react";

export default function FooterCard() {
    return (
        <div className="flex items-center justify-center mt-8 space-x-4">
            <Button variant="outline" className="rounded-lg">
                <FaGoogle className="w-7 h-7 text-gray-700" />
            </Button>

            <Button variant="outline" className="rounded-lg">
                <FaTwitter className="w-7 h-7 text-gray-700" />
            </Button>

            <Button variant="outline" className="rounded-lg">
                <GitBranch className="w-7 h-7 text-gray-700" />
            </Button>
        </div>
    );
}
