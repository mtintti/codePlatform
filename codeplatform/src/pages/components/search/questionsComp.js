
export default function SearchQuestionsComp() {
    return (
        <div>
            <div className={`${poppins.className} grid grid-cols-1 gap-6 mt-8`}>
                {questions.map((question, index) => (
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
