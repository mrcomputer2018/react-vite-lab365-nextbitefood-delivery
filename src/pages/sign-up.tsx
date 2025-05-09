import FooterCard from "@/components/commons/footer-card";
import FormCadastro from "@/components/commons/form-cadastro";
import Header from "@/components/commons/Header";
import TitleCard from "@/components/commons/title-card";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SignUp() {
    return (
        <>
            <Header bgcolor="#333" />

            <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <Card className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
                    <CardTitle>
                        <TitleCard
                            title="Cadastrar"
                            description="Por favor inserir seus dados para efetuar seu cadastro."
                        />
                    </CardTitle>
                    <CardContent>
                        <FormCadastro />

                        <Separator />

                        <div>
                            <p className="mt-4 text-sm text-center text-gray-600">
                                Não tem uma conta?{" "}
                                <a
                                    href="/sign-up"
                                    className="text-blue-500 hover:underline"
                                >
                                    Crie uma agora!
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
