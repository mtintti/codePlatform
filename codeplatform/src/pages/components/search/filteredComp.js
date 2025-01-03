import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function FilteredComp() {
    const { questions, topics, setSelected, selected } = useQuestions();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const router = useRouter();

    // Get the search query from searchParams
    const searchQuery = searchParams.get('query')?.toLowerCase() || '';

    // Filter questions based on the search query
    const filteredQuestions = questions.filter((question) =>
        question.title.toLowerCase().includes(searchQuery) ||
        question.description.toLowerCase().includes(searchQuery)
    );

    const onClickSelected = (question) => {
        setSelected(question);
        router.push({
            pathname: `/questions/${question.title}`,
        });
    };

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <div className={`${poppins.className} grid grid-cols-1 gap-6 mt-8`}>
                {filteredQuestions.map((question, index) => (
                    <button
                        key={index}
                        onClick={() => onClickselected(question)}
                        className="text-left block p-4 shadow-md bg-white dark:bg-neutral-800"
                    >
                        <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {question.title}
                            </h3>
                            <div className="w-[1px] bg-neutral-600 h-[40px] sm:h-[18px]"></div>
                            <div className="inline-block font-light text-sm text-gray-700 dark:text-neutral-500">
                                {question.difficulty}
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            {question.description}
                        </p>
                        <div className="space-x-2 pt-3">
                            <div className="inline-block rounded-md px-1.5 py-0.5 font-light text-sm bg-gray-100 text-gray-700">
                                {question.type}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
