import CardImage from "@/components/commons/CardImage";
import CardTitleForm from "@/components/commons/CardTitleForm";
import FooterCard from "@/components/commons/footer-card";
import NavigationLinkScreen from "@/components/commons/navigation-link-screen";
import LoginForm from "@/components/landing_page/LoginForm";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function SignInPàge() {
    return (
        <main className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card className="py-8 px-4">

                <CardImage />

                <CardTitleForm title="Login" description="Por favor entre com as suas credenciais para fazer login."/>

                <CardContent>
                    <LoginForm />

                    <NavigationLinkScreen />
                </CardContent>

                <CardFooter>
                    <FooterCard />
                </CardFooter>
            </Card>
        </main>
    );
}
