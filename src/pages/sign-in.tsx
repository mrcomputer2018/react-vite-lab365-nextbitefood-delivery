import FooterCard from "@/components/commons/footer-card";
import FormLogin from "@/components/commons/form-login";
import Header from "@/components/commons/Header";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";


export default function SignIn() {
    return (
        <>
            <Header bgcolor="#333" />

            <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <Card className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
                    <CardTitle>
                        <h2 className="text-3xl uppercase">login</h2>
                        <CardDescription>
                            Por favor entre com as suas credenciais para fazer
                            login.
                        </CardDescription>
                    </CardTitle>
                    <CardContent>
                        <FormLogin />

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
