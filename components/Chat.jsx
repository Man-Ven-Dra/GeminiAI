import { useSelector } from "react-redux";
import { Gemini_Icon } from "../utils/constants";
import { useEffect, useState } from "react";
import PreviousChat from "./PreviousChat";

const Chat = () => {
    const response = useSelector((store) => store.response)
    const prompt = useSelector((store) => store.prompt)
    const userInfo = useSelector((store) => store.user)
    const [text, setText] = useState("");
    const message = response;
    function makeTextBold(text) {
      
      const regex = /\*\*(.*?)\*\*/g;
      const newlineRegex = /\*/g;
      
      const boldText = text.replace(regex, '<strong>$1</strong>');
      const newText = boldText.replace(newlineRegex, '<br/>');
      return newText;
  }
    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
          if (currentIndex <= message.length) {
            const newText = makeTextBold(message.substring(0, currentIndex));
            setText(newText);
            currentIndex=currentIndex+4;
          } else {
            clearInterval(intervalId);
          }
        }, 50); // Adjust the interval duration for typing speed
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div className="w-full text-[1.2rem] flex
         justify-center h-[29rem] mt-10 overflow-scroll pr-8" style={{ "scrollbarWidth": "none" }}>
            <div className="w-3/5">
                <PreviousChat/>
                <div className="flex items-center gap-4 m-3 font-medium">
                    <img className="w-[1.7rem] rounded-full" src={userInfo?.photoURL} alt="avatar"/>
                    {prompt}
                </div>
                <div className="flex  gap-4 m-3 text-[1rem] text-justify">
                    <img className="w-[1.7rem] h-[1.7rem] mt-1 rounded-full" src={Gemini_Icon} alt="avatar"/>
                    {<div dangerouslySetInnerHTML={{ __html: text }} />}
                </div>
            </div>
        </div>
    );
};

export default Chat;