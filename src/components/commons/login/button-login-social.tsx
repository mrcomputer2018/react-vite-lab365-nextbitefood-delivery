import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface ButtonLoginSocialProps {
    icon: IconType;
}

export default function ButtonLoginSocial({icon: Icon}: ButtonLoginSocialProps) {
    return (
        <Button
            className="rounded-lg border border-green-600 hover:bg-green-100"
            variant="outline"
        >
            <Icon className="w-7 h-7 text-gray-700" />
        </Button>
    );
}
