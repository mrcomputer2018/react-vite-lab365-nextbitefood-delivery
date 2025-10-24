import { ImgHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    src: string;
    alt: string;
    size?: "default" | "large" | "auto";
    resizeMode?: "cover" | "contain" | "fill" | "none"
}

const ImageVariants = tv({
    base: "mx-auto"
})

export default function CardImage({ src, alt, ...props }: CardImageProps) {
    return (
        <div>
            <img
                src={src}
                alt={alt}
                className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg"
                {...props}
            />
        </div>
    )
}