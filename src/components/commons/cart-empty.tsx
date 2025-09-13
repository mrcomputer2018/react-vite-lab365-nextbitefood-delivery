import { ShoppingCart } from "lucide-react";

export default function CartEmpty() {
    return (
        <section className="w-full h-screen mx-auto p-6 bg-gray-100">
            <div className="flex flex-row items-center gap-3 mb-6 ">
                <ShoppingCart className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-800">
                    Meu carrinho
                </h2>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 min-h-[400px] max-w-4xl mx-auto flex items-center justify-center">
                <div className="text-center">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        Seu carrinho está vazio
                    </h3>
                    <p className="text-gray-500">
                        Adicione alguns items ao seu carrinho!!!
                    </p>
                </div>
            </div>
        </section>
    );
}
