import { assets } from "@/assets/assets";
import FooterCard from "@/components/commons/footer-card";
import FormLogin from "@/components/commons/form-login";
import TitleCard from "@/components/commons/title-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SignIn() {
    function handleBackToHome() {
        window.location.href = "/";
    }

    return (
        <>
            <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <Card className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
                    <div>
                        <img
                            src={assets.logo}
                            alt="Logo"
                            className="w-24 h-24 mx-auto mb-3 rounded-full shadow-lg"
                        />
                    </div>
                    <CardTitle>
                        <TitleCard
                            title="login"
                            description="Por favor entre com as suas credenciais para fazer login."
                        />
                    </CardTitle>
                    <CardContent>
                        <FormLogin />

                        <Separator />

                        <div>
                            <p className="mt-4 text-sm text-center text-gray-600">
                                Não tem uma conta?{" "}
                                <a
                                    href="/sign-up"
                                    className="text-green-500 hover:underline"
                                >
                                    Cadastre-se!
                                </a>
                            </p>
                        </div>

                        <FooterCard />

                        <div className="relative flex items-center justify-center mt-6 w-full">
                            <Button
                                onClick={handleBackToHome}
                                variant="ghost"
                                className="flex flex-row items-center justify-center mb-6 text-gray-800"
                            >
                                <span className="ml-3 text-md">
                                    Voltar para o início
                                </span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </>
    );
}
