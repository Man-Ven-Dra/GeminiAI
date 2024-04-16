import { FaPencilAlt } from "react-icons/fa";

const WelcomeText = () => {
    return (
        <div className="w-full h-[29rem] flex flex-col items-center justify-center mt-14 ">
            <div className="text-[3.5rem] w-3/5 font-semibold ">
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-400">Hello, Manvendra Singh</div>
                <div className="text-gray-400">How can I help you today?</div>
            </div>
            <div className="flex mt-16 gap-[1rem] w-3/5 text-[17px] font-light">
                <div className="bg-slate-100 w-[13rem] h-[12rem] rounded-lg flex flex-col justify-between cursor-pointer  hover:bg-slate-200">
                    <div className="p-3 w-full">
                        Help me compare these college majors
                    </div>
                    <div className="p-3 w-full flex justify-end items-end">
                        <span className="p-3 rounded-full bg-white"><FaPencilAlt/></span>
                    </div>
                </div>
                <div className="bg-slate-100 w-[13rem] h-[12rem] rounded-lg flex flex-col justify-between cursor-pointer hover:bg-slate-200">
                    <div className="p-3 w-full">
                        Help write SQL to create a report
                    </div>
                    <div className="p-3 w-full flex justify-end items-end">
                        <span className="p-3 rounded-full bg-white"><FaPencilAlt/></span>
                    </div>
                </div>
                <div className="bg-slate-100 w-[13rem] h-[12rem] rounded-lg flex flex-col justify-between cursor-pointer  hover:bg-slate-200">
                    <div className="p-3 w-full">
                        Help me sound like an expert for an upcoming trip
                    </div>
                    <div className="p-3 w-full flex justify-end items-end">
                        <span className="p-3 rounded-full bg-white"><FaPencilAlt/></span>
                    </div>
                </div>
                <div className="bg-slate-100 w-[13rem] h-[12rem] rounded-lg flex flex-col justify-between cursor-pointer  hover:bg-slate-200">
                    <div className="p-3 w-full">
                        Write a thankyou note to my collegue
                    </div>
                    <div className="p-3 w-full flex justify-end items-end">
                        <span className="p-3 rounded-full bg-white"><FaPencilAlt/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeText;