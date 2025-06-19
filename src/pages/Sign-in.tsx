import CardImage from "@/components/commons/CardImage";
import CardTitleForm from "@/components/commons/CardTitleForm";
import LoginForm from "@/components/landing_page/LoginForm";
import { Card, CardContent } from "@/components/ui/card";

export default function SignInPàge() {
    return (
        <main className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card className="py-8 px-4">

                <CardImage />

                <CardTitleForm title="Login" description="Por favor entre com as suas credenciais para fazer login."/>

                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </main>
    );
}
