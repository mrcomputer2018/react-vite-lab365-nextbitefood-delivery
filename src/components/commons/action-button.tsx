import { PenIcon, TrashIcon } from "lucide-react";

export default function ActionButton() {
    return (
        <div className="flex flex-row items-center space-x-6">
            <PenIcon
            className="w-9 h-9 text-white bg-gray-500 cursor-pointer border border-gray-300 p-2 
            rounded hover:bg-gray-400 transition ease-in-out duration-400" />
            <TrashIcon 
            className="w-9 h-9 text-white bg-gray-500 cursor-pointer border border-gray-300 p-2 
            rounded hover:bg-gray-400 transition ease-in-out duration-400" />
        </div>
    );
}
