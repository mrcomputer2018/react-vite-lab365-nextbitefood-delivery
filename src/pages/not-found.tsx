export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404 - Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">A página que você está procurando não existe.</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">Voltar para a página inicial</a>
        </div>
    )
}