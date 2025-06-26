import { Button } from "../ui/button";
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function FooterCard() {
    return (
        <div className=" flex flex-row items-center justify-center w-full mt-4 gap-5">
            <Button className="rounded-lg border border-green-600 hover:bg-green-100" variant="outline">
                <FaGoogle className="w-7 h-7 text-gray-700" />
            </Button>

             <Button className="rounded-lg" variant="outline">
                <FaFacebook className="w-7 h-7 text-gray-700" />
            </Button>

             <Button className="rounded-lg" variant="outline">
                <FaMicrosoft className="w-7 h-7 text-gray-700" />
            </Button>
        </div>
    )
}