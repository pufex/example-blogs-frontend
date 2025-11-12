export default function Button({
    children,
    onClick,
    type = "button"
}) {
    return <button onClick={onClick} className="px-2 py-1 font-semibold text-center flex items-center gap-2 rounded-lg border-2 border-blue-900/20 bg-blue-600 text-white cursor-pointer transform hover:scale-105 hover:bg-blue-500 active:bg-blue-400 active:scale-95" type={type}>
        {children}
    </button>
}