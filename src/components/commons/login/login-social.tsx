import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import ButtonLoginSocial from "./button-login-social";

export default function LoginSocial() {
    
    const providers = [FaGoogle, FaFacebook, FaMicrosoft];

    return (
        <div className=" flex flex-row items-center justify-center w-full mt-4 gap-5">
            {providers.map((Icon, index) => (
                <ButtonLoginSocial key={index} icon={Icon} />
            ))}
        </div>
    );
}
