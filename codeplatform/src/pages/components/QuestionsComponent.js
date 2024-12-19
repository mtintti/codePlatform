

export default function QuestionsComponent() {

   

    return (
        <div className="text-2xl">
            <h2>Two sum</h2>
            <div className="mt-3 h-px bg-neutral-500 h-[18px]"></div>
            <div className=" text-base my-4">
                <p> Given a string s which consists of lowercase or uppercase letters, return the length of the longest
                    palindrome
                    that can be built with those letters.</p>
                <p>Letters are case sensitive, for example, "Aa" is not considered a palindrome.</p>
                <div className="pl-3 mt-8 text-base font-semi  space-x-4">
                    Example:
                    <div className="pl-2 text-base font-light">Input: s = "abccccdd"
                        Output: 7</div>
                    <div className=" mt-4 text-base font-semi">
                        Example:
                        <div className="pl-2 text-base font-light">Input: s = "a"
                            Output: 1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
