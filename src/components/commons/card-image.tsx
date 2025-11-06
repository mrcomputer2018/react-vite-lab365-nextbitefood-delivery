import { ImgHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    src: string;
    alt: string;
    size?: "default" | "large" | "auto";
    resizeMode?: "cover" | "contain" | "fill" | "none"
}

const ImageVariants = tv({
    base: "mx-auto",
    variants: {
        size: {
            default:"w-24 h-24 rounded-full shadow-lg",
            large: "w-full h-46",
            auto:"w-auto h-auto shadow-lg"
        }
    },
    defaultVariants: {
        size: "default"
    }
})

export default function CardImage({ src, alt, size,...props }: CardImageProps) {
    return (
        <div>
            <img
                src={src}
                alt={alt}
                className={ImageVariants({size})}
                {...props}
            />
        </div>
    )
}