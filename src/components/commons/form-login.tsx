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
                        <FormItem>
                            <FormLabel>Email</FormLabel>

                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Digite seu email"
                                    {...field}
                                    className={`w-full mt-2 mb-1 ${
                                        fieldState.error ? "border-red-500" : ""
                                    }`}
                                />
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
                        <FormItem>
                            <FormLabel>Senha</FormLabel>

                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    {...field}
                                    className={`w-full mt-2 mb-1 ${
                                        fieldState.error ? "border-red-500" : ""
                                    }`}
                                />
                            </FormControl>

                            <FormMessage className="text-red-500">
                                {fieldState.error?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                />

                <div className="mt-4 w-full">
                    <Button
                        className="w-full font-bold uppercase"
                        type="submit"
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </Form>
    );
}
