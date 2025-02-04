import { useQuestions } from "@/context/Context";

export default function QuestionsComponent() {
    const {selected} = useQuestions();
   

    return (
        <div className="text-2xl">
            <h2>{selected.title}</h2>
            <div className="mt-3 h-px bg-neutral-500 h-[18px]"></div>
            <div className=" text-base my-4">
                <p>{selected.description}</p>
                <div className=" mt-8 text-base font-semi  space-x-4">
                    Example: {selected.example}
                </div>
            </div>
        </div>
    )
}
