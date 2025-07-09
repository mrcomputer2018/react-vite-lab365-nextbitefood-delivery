import ButtonNavigateHome from "@/components/commons/button-navigate-home";
import CardImage from "@/components/commons/card-image";
import CardTitleForm from "@/components/commons/card-title-form";
import NavigationLinkScreen from "@/components/commons/navigation-link-screen";
import RegisterForm from "@/components/commons/register-form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function SignUpPage() {
    return (
        <main className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card className="py-8 px-4">
                <CardImage />

                <CardTitleForm
                    title="Cadastre-se"
                    description="Por favor digite suas credenciais para se cadastrar."
                />

                <CardContent>
                    <RegisterForm />

                    <NavigationLinkScreen
                        to="Ja tem uma conta?"
                        text="Faça login."
                        path="/signin"
                    />
                </CardContent>

                <CardFooter className="flex flex-col items-center justify-center gap-8">
                    <ButtonNavigateHome />
                </CardFooter>
            </Card>
        </main>
    );
}
