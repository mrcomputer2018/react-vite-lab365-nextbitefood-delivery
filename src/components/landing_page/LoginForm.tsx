import { Eye, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonCustom from "../commons/ButtonCustom";

export default function LoginForm() {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="">E-mail</label>

                <div className="flex flex-row items-center justify-start gap-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <input type="email" placeholder="Digite seu email..." />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="">Senha</label>
                <div className="flex flex-row items-center justify-start gap-2">
                    <Eye className="h-5 w-5 text-gray-400" />
                    <input type="password" placeholder="Digite sua senha..." />
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
