import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";

const formSchema = z.object({
    nome: z.string().nonempty("Nome é obrigatorio").min(3, "Nome deve ter no minimo 3 caracteres"),
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    senha: z
        .string()
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .max(20, "Senha deve ter no máximo 20 caracteres")
        .nonempty("Senha é obrigatória"),
})

export default function FormCadastro() {
    const form = useForm<z.infer<typeof formSchema>>({

    })
    
    return (
        <Form {...form}>
            
        </Form>
    )
}