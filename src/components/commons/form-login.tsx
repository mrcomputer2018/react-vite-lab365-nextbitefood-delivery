import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "../ui/form";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const formSchema = z.object({
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    senha: z
        .string()
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .max(20, "Senha deve ter no máximo 20 caracteres")
        .nonempty("Senha é obrigatória"),
});

export default function FormLogin() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        console.log("FORMDATA : " + data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-4">
                            <FormLabel>Email</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                        <Mail className="text-gray-400 w-5 h-5" />
                                    </span>
                                    <Input
                                        type="email"
                                        placeholder="Digite seu email..."
                                        {...field}
                                        className={`w-full border-green-600/40 placeholder:text-gray-400 mb-1 pl-10 ${
                                            fieldState.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                    />
                                </div>
                            </FormControl>

                            <FormMessage className="text-red-500">
                                {fieldState.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="senha"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-4">
                            <FormLabel>Senha</FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="absolute left-0 top-2 pl-3 pointer-events-none">
                                        <Lock className="text-gray-400 w-5 h-5" />
                                    </span>
                                    <Input
                                        type="password"
                                        placeholder="Digite sua senha..."
                                        {...field}
                                        className={`border-green-600/40 placeholder:text-gray-400 mb-1 pr-10 pl-10 ${
                                            fieldState.error
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                    />
                                </div>
                            </FormControl>

                            <FormMessage className="text-red-500">
                                {fieldState.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Lembrar de mim
                        </span>
                    </label>
                    <Link
                        to="/forgot-password"
                        className="text-sm text-green-600 hover:text-green-700"
                    >
                        Esqueci minha senha
                    </Link>
                </div>

                <div className="mt-4 w-full">
                    <Button
                        className="w-full font-bold uppercase bg-gradient-to-r from-green-600 to-blue-800 
                        hover:opacity-60 text-white transition-all ease-in-out duration-700 cursor-pointer"
                        type="submit"
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </Form>
    );
}
