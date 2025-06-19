import { Eye, Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function LoginForm() {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="">E-mail</label>

                <div className="flex flex-row items-center justify-start gap-2">
                    <Mail className="h-5 w-5 text-gray-400"/>
                    <input type="email" placeholder="Digite seu email..." />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="">Senha</label>
                <div className="flex flex-row items-center justify-start gap-2">
                    <Eye className="h-5 w-5 text-gray-400"/>
                    <input type="password" placeholder="Digite sua senha..." />
                </div>
            </div>

            <button>Entrar</button>
        </form>
    );
}
