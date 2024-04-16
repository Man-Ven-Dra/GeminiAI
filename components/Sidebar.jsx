import { IoReorderThree } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";

import { useState } from "react";
import Recents from "./Recents";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
        {(showSidebar)
            ? <div className="bg-slate-100 w-80 h-screen flex flex-col pl-6 pt-6 -ml-3">
                <span className="p-2 w-10 rounded-full bg-white mb-[5.5rem] cursor-pointer">
                    <IoReorderThree style={{ fontSize: '1.5rem', }} onClick={() => { setShowSidebar(!showSidebar) }} />
                </span>
                <div className="text-lg mb-3 w-full pl-1 pr-5">
                    Recents
                    <div className="w-full bg-gray-300 h-[1px]"></div>
                </div>
                <div className="w-full h-3/6 pl-3 pr-3 mb-[2.8rem]">
                    <Recents />
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <span className="flex items-center gap-5 hover:text-blue-500 cursor-pointer">
                        <IoIosHelpCircleOutline style={{ fontSize: '1.3rem', }} /> Help
                    </span>
                    <span className="flex items-center gap-5 hover:text-blue-500 cursor-pointer">
                        <RxCounterClockwiseClock style={{ fontSize: '1.3rem', }} /> Activity
                    </span>
                    <span className="flex items-center gap-5 hover:text-blue-500 cursor-pointer">
                        <IoSettingsOutline style={{ fontSize: '1.3rem', }} /> Settings
                    </span>
                </div>
            </div>
            : <div className="bg-slate-100 w-16 h-screen flex flex-col items-center pt-8 gap-[34rem] ">
                <IoReorderThree style={{ fontSize: '1.5rem', cursor: 'pointer'}} onClick={() => { setShowSidebar(!showSidebar) }} />
                <div className="flex flex-col items-center gap-[1rem]">
                    <IoIosHelpCircleOutline style={{ fontSize: '1.5rem', }} className="hover:text-blue-500" />
                    <RxCounterClockwiseClock style={{ fontSize: '1.2rem', }} className="hover:text-blue-500" />
                    <IoSettingsOutline style={{ fontSize: '1.2rem', }} className="hover:text-blue-500" />
                </div>
            </div>
        }
        </>
    );
};

export default Sidebar;
