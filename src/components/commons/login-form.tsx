import { Eye, EyeOff, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonCustom from "./button-custom";
import { Input } from "../ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";


const loginFormSchema = z.object({
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    senha: z
        .string()
        .min(8, "Senha deve ter pelo menos 8 caracteres")
        .max(20, "Senha deve ter no máximo 20 caracteres")
        .nonempty("Senha é obrigatória"),
});

export default function LoginForm() {
    const { signIn } = useAuth();
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    function togglePasswordVisibility() {
        setViewPassword(!viewPassword);
    }

    function onSubmit(data: z.infer<typeof loginFormSchema>) {
        const senha = data.senha;
        const email = data.email;

        signIn(email, senha);

        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                {/* email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel>E-mail</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <Input
                                        type="email"
                                        placeholder="Digite seu email..."
                                        {...field}
                                        className={`w-full border-green-600/40 placeholder:text-gray-400 mb-1 
                                    pl-10 ${
                                        fieldState.error ? "border-red-500" : ""
                                    }`}
                                    />
                                </div>
                            </FormControl>

                            <FormMessage>
                                {fieldState.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                {/* email */}
                <FormField
                    control={form.control}
                    name="senha"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel>Senha</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span
                                        className="absolute left-0 top-2 pl-3 z-20"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {viewPassword ? (
                                            <Eye className="w-5 h-5 text-gray-400" />
                                        ) : (
                                            <EyeOff className="w-5 h-5 text-gray-400" />
                                        )}
                                    </span>
                                    <Input
                                        type={
                                            viewPassword ? "text" : "password"
                                        }
                                        placeholder="Digite sua senha..."
                                        {...field}
                                        className={`w-full border-green-600/40 placeholder:text-gray-400 mb-1 
                                    pl-10 ${
                                        fieldState.error ? "border-red-500" : ""
                                    }`}
                                    />
                                </div>
                            </FormControl>

                            <FormMessage>
                                {fieldState.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

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
                        variant="gradient"
                        alignment="center"
                    />
                </div>
            </form>
        </Form>
    );
}
