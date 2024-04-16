import { useRef, useState } from "react";
import Chat from "./Chat";
import Header from "./Header";
import WelcomeText from "./WelcomeText";
import geminiLogic from "../hooks/gemini";
import { useDispatch, useSelector } from "react-redux";
import { setResponse } from "../utils/responseSlice";
import Sidebar from "./Sidebar";
import { setPrompt } from "../utils/promptSlice";
import { setRecents } from "../utils/recentSlice";
import { LuSendHorizonal } from "react-icons/lu";
import ShimmerEffect from "./ShimmerEffect";
import { setChat } from "../utils/chatSlice";
import PreviousChat from "./PreviousChat";

const Homepage = () => {
    const [onSearch, setOnSearch] = useState(false);
    const prompt = useRef()
    const dispatch = useDispatch()
    const result = useSelector((store) => store.response)
    const lastPrompt = useSelector((store) => store.prompt)
    const handleClick = async () => {
        dispatch(setChat(
            [lastPrompt, result]
        ))
        dispatch(setPrompt(
            prompt.current.value
        ))
        setOnSearch(!onSearch);
        const response = await geminiLogic(prompt.current.value)
        dispatch(setResponse(
            response
        ))
        dispatch(setRecents(
            prompt.current.value
        ))
        setOnSearch(!setOnSearch)
    }
    return (
        <div className="flex">
            <Sidebar/>
            <div className="w-full flex flex-col items-center">
                <Header/>
                {(onSearch)?<div className="w-3/5 mt-10 h-[29rem] overflow-scroll text-[1.2rem]" style={{ "scrollbarWidth": "none" }}><PreviousChat/><ShimmerEffect/></div>:(result)?<Chat/>
                :<WelcomeText/>}
                <div className="w-full flex justify-center items-center mt-10">
                    <input ref={prompt} className="bg-slate-100 w-3/5 h-[4rem] rounded-full p-5 pr-12 text-[1.2rem] ml-4 outline-none  hover:bg-slate-200" type="text" placeholder="Enter a promt here"/>
                    <button
                    className="bg-slate-100 relative z-10 right-8 bg-transparent" 
                    onClick={handleClick}>
                        <LuSendHorizonal style={{ fontSize: '1.2rem', }}/>
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default Homepage;