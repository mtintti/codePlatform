

import Link from "next/link";
import { useState } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { motion,useMotionValueEvent,useScroll } from "motion/react";
import { useAuth } from "@/context/AuthContext";

export default function Header() {

    const [showModal, setShowModal] = useState(false);
    const [modalCont, setModalCont] = useState(null);
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
    const {isLoggedIn} = useAuth();

    const modalRegHandler = () => {
        setModalCont(<Register switchLogin={modalLoginHandler} />);
        setShowModal(true);
    };

    const modalLoginHandler = () => {
        setModalCont(<Login switchSignin={modalRegHandler} />);
        setShowModal(true);
    };

    const close = () => {
        setShowModal(false);
        setModalCont(null);
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious();
        if(latest > prev && latest > 50){
            setHidden(true);
        } else {
            setHidden(false);
        }
    });


    return (
        <div className="fixed w-full px-8 md:px-12">
            <div className="max-w-screen-lg sm:w-11/12 mx-auto flex justify-center items-center">
                <motion.nav variants={{visible: {y: 0}, hidden: {y: "-200%"}}} animate={ hidden ? "hidden" : "visible"}
                transition={{duration: 0.45, ease: "easeInOut"}}
                className="mt-8 rounded-lg bg-neutral-800/60 w-fit text-sm md:text-base">
                    <ul className="flex items-center gap-4">
                        <Link className="py-3 md:ml-2 md:px-2 ml-2 text-neutral-200 hover:text-neutral-150" href="/">Home</Link>
                        <Link className="py-3 md:px-2 text-neutral-200 hover:text-neutral-150" href="/questions">Questions</Link>
                        <Link className="py-3 md:px-2 text-neutral-200 hover:text-neutral-150" href="/learn">Learn</Link>
                        <Link className="py-3 md:px-2 text-neutral-200 hover:text-neutral-150" href="/about">About</Link>
                        <div className="w-px bg-neutral-50 h-[18px]"></div>
                        {isLoggedIn ? (<Link className="md:px-3 mr-2 text-neutral-200 hover:text-neutral-150" href="/Profile">Profile</Link>) :
                            (<button className="md:px-3 mr-2 text-neutral-200 hover:text-neutral-150" onClick={modalRegHandler}>Register</button>)}
                    </ul>
                </motion.nav>

                {showModal && (
                    <div className="fixed inset-0 z-40 flex justify-center items-center bg-black/60 backdrop-blur-sm">
                        <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-screen-lg">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                                onClick={close}
                            >
                                close
                            </button>
                            {modalCont}
                        </div>
                    </div>
                )
                }
            </div >
        </div >
    );
}

