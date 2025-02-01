import { motion, useScroll, useTransform } from "motion/react"

export default function Statements() {

    const subtexts = [
        "Hey, do you know that doing one algo question a day improves problem-solving skills?",
        "Understanding time complexity is key to writing efficient code.",
        "Practice makes perfect! Keep solving problems consistently."
    ];

    const { scrollYProgress } = useScroll();
    const scaleVal = useTransform(scrollYProgress, [0, 1], [0.7, 1.0]);
    //const opacityVal = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);


    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="max-w-7xl grid w-full grid-rows-1 md:grid-rows-2 tracking-wide px-10">
                <div className="flex text-3xl font-medium pt-3">
                    <p className="text-left my-8 pb-10 md:pb-0">Condisider all the ways you can use to learn Algorithms using our platform.
                        Condisider all the ways you can use to learn Algorithms using our platform. all the ways you can use to.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/*  pt-8 mx-10 my-8 */}
                    <motion.div style={{ scale: scaleVal }}>
                        {subtexts.map((text, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: -70 }}
                                className="text-left text-xl md:text-2xl py-4 md:my-0 font-lg"
                            >
                                {text}
                            </motion.p>
                        ))}
                    </motion.div>

                </div>

            </div>
        </div>
    );
}

/* <div className="grid grid-cols-1">
            <div className="flex justify-center items-center pt-3">
                <p>KASK SODKOA OJSDOAJ OPDFOSAO JOJDSAP AJ JAS ASJDOA</p>
            </div>
            <div className="space-x-10 pt-10 grid grid-rows-3">
                <div>
                    <p className="font-bold text-lg">ksdokaod kosdoakda ksdoka</p>
                </div>
                <div>
                    <p className="font-bold text-lg">ksdokaod kosdoakda ksdoka</p>
                </div>
                <div>
                    <p className="font-bold text-lg">ksdokaod kosdoakda ksdoka</p>
                </div>
            </div>
        </div> */


{/*<div className="px-80 space-x-8 mt-36">
                        <div className="flex justify-center items-center pt-30 grid grid-cols-1 md:grid-cols-3">*/}

/*  
                        <div className="px-4 sm:px-8 md:px-20 lg:px-40 space-x-4 mt-16">
                            <div className="flex justify-center items-center grid grid-rows-3 gap-8">
                                <motion.div initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: -70 }}>
                                    <div className="auto-rows-auto">
                                        <p className="font-bold text-2xl">Improved coding skills</p>
                                        <p className="font-bold text-lg">ksdokaod kosdoakda ksdoka</p>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: -70 }}>
                                    <div className="auto-rows-auto">
                                        <p className="font-bold text-2xl">Improved coding skills</p>
                                        <p className="font-bold text-lg">ksdokaod kosdoakda ksdoka</p>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: -70 }}>
                                    <div className="auto-rows-auto">
                                        <p className="font-bold text-2xl">Improved coding skills</p>
                                        <p className="font-bold text-lg">ksdokaod kosdoakda ksdoka</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div> */