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
import { Mail, Lock} from "lucide-react";


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

                <div className="mt-4 w-full">
                    <Button
                        className="w-full font-bold uppercase bg-green-600 hover:bg-green-600/80 text-white"
                        type="submit"
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </Form>
    );
}
