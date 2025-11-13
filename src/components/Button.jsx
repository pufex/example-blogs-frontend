export default function Button({
    children,
    onClick,
    type = "button",
    disabled = false,
    className = ""
}) {
    return <button
        onClick={onClick}
        className={`px-8 h-10 font-semibold text-center flex items-center gap-2 rounded-lg border-2 border-blue-900/20 text-white cursor-pointer transform bg-blue-600 hover:scale-105 hover:bg-blue-500 active:bg-blue-400 active:scale-95 ${className}`}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
}