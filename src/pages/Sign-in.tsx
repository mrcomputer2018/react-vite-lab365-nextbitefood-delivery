import ButtonNavigateHome from "@/components/commons/button-navigate-home";
import CardImage from "@/components/commons/card-image";
import CardTitleForm from "@/components/commons/card-title-form";
import LoginSocial from "@/components/commons/login/login-social";
import NavigationLinkScreen from "@/components/commons/navigation-link-screen";
import LoginForm from "@/components/commons/login-form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export default function SignInPage() {

    const { user } = useAuth();

    if (user) {
        return <Navigate to="/profile" replace />;
    }
   
    return (
        <main className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card className="py-8 px-4">
                <CardImage />

                <CardTitleForm
                    title="Login"
                    description="Por favor entre com as suas credenciais para fazer login."
                />

                <CardContent>
                    <LoginForm />

                    <NavigationLinkScreen
                        to="Não tem uma conta?"
                        text="Cadastre-se aqui."
                        path="/signup"
                    />
                </CardContent>

                <CardFooter className="flex flex-col items-center justify-center gap-8">
                    <LoginSocial />

                    <ButtonNavigateHome />
                </CardFooter>
            </Card>
        </main>
    );
}
