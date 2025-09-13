import CartEmpty from "@/components/commons/cart-empty"

export default function Mycart() {
    const cart = null
    
    if (!cart) {
        return <CartEmpty />
    }

    return (
        <div>
            <h1>Meu Carrinho</h1>
        </div>
    )
}