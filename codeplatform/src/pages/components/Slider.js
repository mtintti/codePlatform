
import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, motion } from "motion/react";
import { Poppins, } from "next/font/google";
import { useRef } from "react";
import { wrap } from "motion";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function Slider() {
    /*const items = ["Arrays", "Sorting", "Graphs", "Dynamic", "Greedy"];
    const itemsRight = ["Backtracking", "Recursion", "Hashing", "Trees"];
    const itemsLast = ["String", "Mathematics", "Bit", "Search", "Graph"];*/

    const items = ["Arrays", "Sorting", "Graphs", "Dynamic", "Greedy"];
    const itemsRight = ["Backtracking", "Recursion", "Hashing", "Trees"];
    const itemsLast = ["String", "Mathematics", "Bit", "Search", "Graph"];

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityF = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const x = useTransform(baseX, (v) => `${wrap(-100, -40, v)}%`);
    const dirFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let bymove = dirFactor.current * 5 * (delta / 1000);

        if (velocityF.get < 0) {
            dirFactor.current = -1;
        } else if (velocityF.get() > 0) {
            dirFactor.current = 1;
        }
        bymove += dirFactor.current * bymove * (velocityF.get() * 0.7);
        baseX.set(baseX.get() + bymove);
    });
    // maskImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)",
    // WebkitMaskImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 1), transparent)",

    /*
    const renderSlider = (items, reverse) => (
        <div className="w-full overflow-hidden">
            <div
                className=""
                style={{
                    "--height": "50px",
                    
                }}
            >
                <motion.div
                    className="flex w-full"
                    style={{
                        x,
                    }}
                >
                    {[...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className="px-4 text-center justify-center md:text-2xl text-1xl whitespace-nowrap"
                        >
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );*/


    // new
    const renderSlider = (items, reverse) => (
        <div className="w-full overflow-hidden"> {/* Matches .parallax */}
            <div
                className="overflow-hidden tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap"
                style={{
                    "--height": "50px",
                }}
            >
                <motion.div
                    className="flex min-w-full w-max font-semibold uppercase text-[64px] whitespace-nowrap flex-nowrap"
                    style={{
                        x,
                    }}
                >
                    {[...items, ...items, ...items, ...items,...items, ...items, ...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className="px-4 text-center justify-center md:text-2xl text-xl block mr-[30px]"
                        >
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );


    return (


        /*<div className={`${poppins.className} flex flex-col justify-center items-center space-y-2 pt-8`}>
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
        </div>*/

        <div className="flex flex-col justify-center items-center py-4 px-4">
            {renderSlider(items)}
            {renderSlider(itemsRight, true)}
            {renderSlider(itemsLast)}
        </div>

    );
}
