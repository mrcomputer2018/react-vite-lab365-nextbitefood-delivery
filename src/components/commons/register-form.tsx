import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Mail, User } from "lucide-react";
import { Input } from "../ui/input";
import ButtonCustom from "./button-custom";

const loginFormSchema = z
    .object({
        nome: z
            .string()
            .nonempty("O nome é obrigatório")
            .min(3, "O nome deve ter pelo menos 3 caracteres")
            .max(50, "O nome deve ter no máximo 50 caracteres")
            .regex(
                /^[a-zA-ZÀ-ÿ\s]+$/,
                "O nome deve conter apenas letras e espaços"
            ),
        email: z
            .string()
            .email("E-mail inválido")
            .nonempty("O e-mail é obrigatório"),
        senha: z
            .string()
            .nonempty("A senha é obrigatória")
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .max(20, "A senha deve ter no máximo 20 caracteres"),
        confirmarSenha: z
            .string()
            .nonempty("A confirmação de senha é obrigatória"),
    })
    .refine(
        (data) => data.senha === data.confirmarSenha,
        {
            message: "As senhas não coincidem",
            path: ["confirmarSenha"],
        }
    );

export default function RegisterForm() {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
        },
    });

    function onSubmit(data: z.infer<typeof loginFormSchema>) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                {/* nome */}
                <FormField
                    control={form.control}
                    name="nome"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel>Nome</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                        <User className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="Digite seu nome..."
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
                                        type="text"
                                        placeholder="Digite seu e-mail..."
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

                {/* senha */}
                <FormField
                    control={form.control}
                    name="senha"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel>Senha</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                        <Eye className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <Input
                                        type="text"
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

                {/* senha */}
                <FormField
                    control={form.control}
                    name="confirmarSenha"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel>Confirmar senha</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                        <Eye className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="Confirme sua senha..."
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

                <div>
                    <ButtonCustom
                        title="Cadastrar"
                        color="bg-gradient-to-r from-green-600 to-blue-800 mt-3"
                        width="w-full"
                    />
                </div>
            </form>
        </Form>
    );
}
