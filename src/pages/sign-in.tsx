import FooterCard from "@/components/commons/footer-card";
import FormLogin from "@/components/commons/form-login";
import TitleCard from "@/components/commons/title-card";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SignIn() {
    return (
        <>
            <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <div>
                    
                </div>
                <Card className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
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
                    </CardContent>
                </Card>
            </main>
        </>
    );
}
