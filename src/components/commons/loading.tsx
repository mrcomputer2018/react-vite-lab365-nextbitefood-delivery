export default function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50 z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700"></div>
        </div>
    )
}