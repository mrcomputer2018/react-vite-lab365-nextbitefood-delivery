import { assets } from "@/assets/assets";

export default function CardIamge() {
    return (
        <div>
            <img
                src={assets.logo}
                alt="Logotipo da empresa"
                className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg"
            />
        </div>
    )
}