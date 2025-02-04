import { motion, useScroll, useTransform } from "motion/react"

export default function Statements() {

    const subtexts = [
        "Hey, do you know that doing one algo question a day improves problem-solving skills?",
        "Understanding time complexity is key to writing efficient code.",
        "Practice makes perfect! Keep solving problems consistently."
    ];

    const { scrollYProgress } = useScroll();
    const scaleVal = useTransform(scrollYProgress, [0, 1], [0.7, 1.0]);


    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="max-w-7xl grid w-full grid-rows-1 md:grid-rows-2 tracking-wide px-10">
                <div className="flex text-3xl font-medium pt-3">
                    <p className="text-left my-8 pb-10 md:pb-0">Explore all the different ways you can learn algorithms with our platform. More questions is added, so you never run out out of them.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
