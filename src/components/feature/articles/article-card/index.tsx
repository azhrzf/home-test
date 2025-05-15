import Image from 'next/image'

export default function ArticleCard() {
    return (
        <article className="space-y-2">
            <Image
                src="/assets/images/home-bg.jpg"
                alt="Featured Image"
                width={500}
                height={240}
                className="rounded-lg mb-4"
            />
            <p className="text-sm text-slate-600">April 13, 2025</p>
            <h2 className="text-lg font-semibold text-slate-900">Cybersecurity Essentials Every Developer Should Know</h2>
            <p className="font-normal text-slate-600">Protect your apps and users with these fundamental cybersecurity practices for developers.</p>
            <div className="flex items-center space-x-2">
                <div className="rounded-xl bg-blue-200 px-3 py-1 font-normal text-sm text-blue-900">
                    Technology
                </div>
            </div>
        </article>
    )
}