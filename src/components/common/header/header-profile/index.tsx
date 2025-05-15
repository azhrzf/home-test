interface HeaderProfileProps {
    textColor?: string;
}

export default function HeaderPorofile({ textColor = "slate-900" }: HeaderProfileProps) {
    return (
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-blue-200 w-8 h-8 flex items-center justify-center">
                <p>J</p>
            </div>
            <p className={`hidden lg:block text-center text-${textColor} font-semibold leading-7 underline decoration-solid`}>James Dean</p>
        </div>
    )
}