import { Link } from "react-router-dom";

export default function NavigationLinkScreen() {
    return (
        <div className="mt-4">
            <p className="text-center text-gray-600 text-sm">
                Não tem uma conta?{" "}
                <Link to="sign-up" className="text-green-600 hover:underline">
                    Cadastre-se aqui.
                </Link>
            </p>
        </div>
    );
}
