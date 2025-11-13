import { Trash2 } from "lucide-react";

export default function DeleteBlogButton() {
    return <button
        className="cursor-pointer w-8 h-8 flex items-center justify-center bg-red-700 border border-red-900 rounded-md transform hover:bg-red-500 hover:scale-105 active:bg-red-400 active:scale-95"
    >
        <Trash2 className="text-white w-5 h-5" />
    </button>
}