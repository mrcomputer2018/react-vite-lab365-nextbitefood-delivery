import { Button } from "../ui/button";

export default function ButtonNavigateHome() {
    return (
        <Button
            className="hover:bg-green-100"
            variant="ghost"
            onClick={() => window.location.href = '/'}
        >
            Voltar para o inicio
        </Button>
    );
}