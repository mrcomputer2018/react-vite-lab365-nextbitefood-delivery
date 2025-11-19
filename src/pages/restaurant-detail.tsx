import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RestaurantDetail(){
    const navigate =  useNavigate();

    function handleGoBack() {
        navigate(-1);
    }
    
    return (
        <section className="w-full max-w-6xl mx-auto p-6">
            <div>
                <Button variant="outline" size="sm" onClick={handleGoBack}>
                    <ArrowLeftIcon size={16} />
                    Voltar
                </Button>
            </div>
        </section>
    )
}