import { useState } from "react";
import ButtonCustom from "./button-custom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import HeaderTabs from "./header-tabs";

export default function ProfileTab() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");

    function handleSaveProfile(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert("Perfil salvo com sucesso.");
    }

    return (
        <form onSubmit={handleSaveProfile}>
            <HeaderTabs
                title="Meu perfil"
                subtitle="AQdicione ou edite aqui o seu perfi."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
                <div>
                    <Label className="mb-2">Nome completo</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="digite seu nome..."
                    />
                </div>
                <div>
                    <Label className="mb-2">Email</Label>
                    <Input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="digite seu e-mail..."
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <Label className="mb-2">Telefone</Label>
                    <Input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="digite seu telefone..."
                    />
                </div>
                <div>
                    <Label className="mb-2">Data de nascimento</Label>
                    <Input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <ButtonCustom title="Salvar alterações" variant="black" />
            </div>
        </form>
    );
}
