interface ProfileInfoRowProps {
    label: string;
    value: string | number;
}

export default function ProfileInfoRow({ label, value }: ProfileInfoRowProps) {
    return (
        <div className="grid grid-cols-12 px-3 py-2.5 rounded-sm border border-slate-200 bg-gray-100 text-gray-900 font-semibold">
            <p className="col-span-4 flex justify-between pr-4">
                <span>{label}</span>
                <span>:</span>
            </p>
            <p className="col-span-8 text-center flex-grow">{value}</p>
        </div>
    );
}