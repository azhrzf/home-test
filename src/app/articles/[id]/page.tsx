import ArticleCard from "@/components/feature/articles/article-card";
import BasicWrapper from "@/components/common/layout/BasicWrapper";
import DefaultContainer from "@/components/common/layout/DefaultContainer";
import Image from "next/image";

export default function ArticleDetailPage() {
    return (
        <BasicWrapper>
            <DefaultContainer className="px-5 py-10 space-y-10">
                <div className="pt-16 space-y-8">
                    <div className="text-center space-y-2">
                        <div className="text-slate-600 text-sm space-x-1.5">
                            <span>February 4, 2025</span>
                            <span>•</span>
                            <span>Created by Admin</span>
                        </div>
                        <h1 className="text-slate-900 font-semibold text-2xl lg:text-3xl max-w-2xl mx-auto px-4">Figma&apos;s New Dev Mode: A Game-Changer for Designers & Developers</h1>
                    </div>
                    <Image
                        src="/assets/images/home-bg.jpg"
                        alt="Featured Image"
                        width={1280}
                        height={480}
                        className="rounded-lg w-full h-[240px] lg:h-[480px] object-cover"
                    />
                    <div className="text-slate-700 font-normal space-y-5">
                        <p>The standard Lorem Ipsum passage, used since the 1500s
                            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
                        </p>
                        <p>
                            Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC
                            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;
                        </p>
                        <p>
                            1914 translation by H. Rackham
                            &quot;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?&quot;
                        </p>
                        <p>
                            Section 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC
                            &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&quot;
                        </p>
                    </div>
                </div>
                <div className="space-y-5">
                    <h3 className="text-slate-900 text-xl font-bold">Other Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Array.from({ length: 3 }, (_, index) => (
                            <ArticleCard key={index} />
                        ))}
                    </div>
                </div>
            </DefaultContainer>
        </BasicWrapper>
    );
}
