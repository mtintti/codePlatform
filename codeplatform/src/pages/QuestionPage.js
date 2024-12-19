import { useRouter } from "next/router";
import Header from "./components/Header";


export default function QuestionPage() {
    const router = useRouter();
    const {title} = router.query;

    return (
        <div>
            <Header />
            <h2>{title}</h2>
            <div className="flex flex-row pt-4">
                <div className="basis-1/2 bg-orange-400 text-center text-slate-200">
                    <p className="justify-center items-center">1</p>
                </div>
                <div className="flex-col">
                    <div className="basis-1/12 bg-orange-400 text-center text-slate-200">2</div>
                    <div className="basis-1/12 bg-orange-400 text-center text-slate-200">3</div>
                </div>
            </div>
        </div>
    );
}

/* <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {title}
                </h1> */