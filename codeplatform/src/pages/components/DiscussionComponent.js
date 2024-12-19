import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { FaArrowTurnUp } from "react-icons/fa6";
import { useState } from "react";
import Searchbar from "./searchbar";

export default function DiscussionComponent() {

    const [commentsVisible, setCommentsVisible] = useState(false);
    const [commentsVisible2, setCommentsVisible2] = useState(false);
    const [respondVisible, setRespondVisible] = useState(false);

    const toggleComments = () => {
        setCommentsVisible(!commentsVisible);
    }

    const toggleComments2 = () => {
        setCommentsVisible2(!commentsVisible2);
    }

    const toggleRespond = () => {
        setRespondVisible(!respondVisible);
    }

    return (
        <div>

            <div>
                <div className="flex space-x-4 items-center">
                    <div className="rounded-full items-center py-5 px-5 bg-green-200"></div>
                    <div className="text-medium">Maija Mehiläinen</div>
                </div>
                <div className="flex mt-4">
                    <h1 className="text-sm">Tää on ihan huono kysymys, mää en osaa!! Yhyy</h1>
                </div>
                <div className="flex space-x-3 my-4 items-center">
                    <div className="hover:bg-green-200 hover:-translate-y-0.5"><MdKeyboardArrowUp /></div>
                    <p className="text-sm">23</p>
                    <div className="hover:bg-red-200 flex hover:translate-y-0.5"><MdKeyboardArrowDown /></div>
                    <div className="flex items-center space-x-1">
                        <IoMdChatbubbles />
                        <div className="text-sm font-light" onClick={toggleComments}>Show 12 replies</div>
                    </div>
                </div>

                {commentsVisible && (
                    <div className="pl-8">
       
                        <div className="mt-4">
                            <div className="flex space-x-4 items-center">
                                <div className="rounded-full items-center py-5 px-5 bg-pink-200"></div>
                                <div className="text-medium">Maija Mehiläinen #2</div>
                            </div>
                            <div className="flex mt-4">
                                <h1 className="text-sm">Maija Mehiläinen on ihan huono näissä, hahaha. Mää vien sun työt, Majia!</h1>
                            </div>
                            <div className="flex space-x-3 my-4 items-center">
                                <div className="hover:bg-green-200 hover:-translate-y-0.5"><MdKeyboardArrowUp /></div>
                                <p className="text-sm">-2</p>
                                <div className="hover:bg-red-200 flex hover:translate-y-0.5"><MdKeyboardArrowDown /></div>
                                <div className="flex items-center space-x-1">
                                    <IoMdChatbubbles />
                                    <div className="text-sm font-light" onClick={toggleComments2}>Show 100 replies</div>
                                </div>
                            </div>
                        </div>

                        {commentsVisible2 && (
                            <div className="mt-4 ml-8">
                                <div className="flex space-x-4 items-center">
                                    <div className="rounded-full items-center py-5 px-5 bg-blue-200"></div>
                                    <div className="text-medium">Another Commenter</div>
                                </div>
                                <div className="flex mt-4">
                                    <h1 className="text-sm">I disagree! This is a fantastic question.</h1>
                                </div>
                                <div className="flex space-x-3 my-4 items-center">
                                    <div className="hover:bg-green-200 hover:-translate-y-0.5"><MdKeyboardArrowUp /></div>
                                    <p className="text-sm">45</p>
                                    <div className="hover:bg-red-200 flex hover:translate-y-0.5"><MdKeyboardArrowDown /></div>
                                    <div className="flex items-center space-x-1">
                                        <IoMdChatbubbles />
                                        <div className="text-sm font-light iems-center flex" onClick={toggleRespond}>Reply</div>
                                        {respondVisible && (
                                            <div className=""><Searchbar placeholder={"Type response"} /></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                )}
                <Searchbar placeholder={"Type something"} />
            </div>

        </div>
    );
}