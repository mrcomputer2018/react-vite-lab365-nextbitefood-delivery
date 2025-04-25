import Header from "@/components/commons/Header";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, GitBranch, Twitter } from "lucide-react";


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
                        <form action="" className="mt-4">
                            <div>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu email"
                                    required
                                    className="w-full mt-2 mb-4"
                                />
                            </div>
                            <div className="mb-10">
                                <Label>Senha</Label>
                                <Input
                                    type="password"
                                    name="senha"
                                    placeholder="Digite sua senha"
                                    required
                                    className="w-full mt-2 mb-4"
                                />
                            </div>

                            <div className="mt-4 w-full">
                                <Button className="w-full font-bold uppercase" type="submit">
                                    Entrar
                                </Button>
                            </div>

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

                            <div className="flex items-center justify-center mt-8 space-x-4">
                                <Button variant="outline">
                                    <Twitter className="px-4 py-2 rounded-lg" color="#333"/>
                                </Button>

                                <Button variant="outline">
                                    <FacebookIcon className="px-4 py-2 rounded-lg" />
                                </Button>

                                <Button variant="outline">
                                    <GitBranch className="px-4 py-2 rounded-lg" />
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </>
    );
}
