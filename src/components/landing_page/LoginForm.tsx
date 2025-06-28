import { Eye, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonCustom from "../commons/ButtonCustom";
import { Input } from "../ui/input";

export default function LoginForm() {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="">
                    E-mail
                </label>
                <div
                    className="flex flex-row items-center justify-start gap-1 
                border border-green-600 px-2 rounded-lg mt-1"
                >
                    <Mail className="h-5 w-5 text-gray-400" />
                    <Input
                        type="email"
                        placeholder="Digite seu email..."
                        className="border-none focus-visible:border-ring-none focus-visible:ring-0"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="">
                    Senha
                </label>
                <div
                    className="flex flex-row items-center justify-start gap-1 
                border border-green-600 px-2 rounded-lg mt-1"
                >
                    <Eye className="h-5 w-5 text-gray-400" />
                    <Input
                        type="password"
                        placeholder="Digite sua senha..."
                        className="border-none focus-visible:border-ring-none focus-visible:ring-0"
                    />
                </div>
            </div>

            <div className="flex flex-row items-center justify-between mb-4">
                <label className="text-sm">
                    <input type="checkbox" className="mr-2" />
                    Lembrar de mim
                </label>

                <Link
                    to="/forgot-password"
                    className="text-sm text-green-500 hover:text-green-700"
                >
                    Esqueci minha senha
                </Link>
            </div>

            <div>
                <ButtonCustom
                    title="Entrar"
                    color="bg-gradient-to-r from-green-600 to-blue-800"
                    width="w-full"
                />
            </div>
        </form>
    );
}
