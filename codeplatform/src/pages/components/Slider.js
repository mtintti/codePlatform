
import { Poppins, } from "next/font/google";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function Slider() {
    const items = ["Arrays", "Sorting", "Graphs", "Dynamic", "Greedy"];
    const itemsRight = ["Backtracking", "Recursion", "Hashing", "Trees"];
    const itemsLast = ["String", "Mathematics", "Bit", "Search", "Graph"];

    return (

        <div className={`${poppins.className} flex flex-col justify-center items-center space-y-2 pt-8`}>
            <div
                className="max-w-4xl pt-4 group h-[var(--height)] overflow-hidden"
                style={{
                    '--height': '50px',
                    '--quantity': items.length,
                    maskImage: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)',
                }}
            >
                <div
                    className="flex w-full relative animate-autoRun"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="lg:px-8 overflow-hidden text-center md:text-2xl text-1xl group-hover:animation-play-state-paused"
                            style={{
                                width: 'fit-content',
                                height: 'var(--height)',
                                marginRight: '30px',
                                animationDelay: `calc((10s / var(--quantity)) * ${index})`,
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="max-w-4xl group h-[var(--height)] overflow-hidden"
                style={{
                    '--height': '50px',
                    '--quantity': items.length,
                    maskImage: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)',
                }}
            >
                <div
                    className="flex w-full relative animate-autoRunRight"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    {itemsRight.map((item, index) => (
                        <div
                            key={index}
                            className="lg:px-8 overflow-hidden text-center md:text-2xl text-1xl group-hover:animation-play-state-paused"
                            style={{
                                width: 'fit-content',
                                height: 'var(--height)',
                                marginRight: '30px',
                                animationDelay: `calc((10s / var(--quantity)) * ${index})`,
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="max-w-4xl group h-[var(--height)] overflow-hidden"
                style={{
                    '--height': '50px',
                    '--quantity': items.length,
                    maskImage: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)',
                }}
            >
                <div
                    className="flex w-full relative animate-autoRunLast"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    {itemsLast.map((item, index) => (
                        <div
                            key={index}
                            className="lg:px-8 overflow-hidden text-center md:text-2xl text-1xl group-hover:animation-play-state-paused"
                            style={{
                                width: 'fit-content',
                                height: 'var(--height)',
                                marginRight: '30px',
                                animationDelay: `calc((10s / var(--quantity)) * ${index})`,
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
