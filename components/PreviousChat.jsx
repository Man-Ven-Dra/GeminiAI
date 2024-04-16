import { useSelector } from "react-redux";
import { Gemini_Icon } from "../utils/constants";

const PreviousChat = () => {
    const lastChat = useSelector((store) => store.chat)
    const userInfo = useSelector((store) => store.user)
    function makeTextBold(text) {
        
        const regex = /\*\*(.*?)\*\*/g;
        const newlineRegex = /\*/g;
        
        const boldText = text?.replace(regex, '<strong>$1</strong>');
        const newText = boldText?.replace(newlineRegex, '<br/>');
        return newText;
    }
    return (
        <div>
            {lastChat.map((item, index) =>
                <div key={index} className="w-full mb-10">
                    <div className="flex items-center gap-4 m-3 font-medium ">
                        {(item[0]!=null)?<img className="w-[1.7rem] rounded-full" src={userInfo?.photoURL} alt="avatar"/>:null}
                        {item[0]}
                    </div>
                    <div className="flex  gap-4 m-3 text-[1rem] text-justify">
                        {(item[0]!=null)?<img className="w-[1.7rem] h-[1.7rem] mt-1 rounded-full" src={Gemini_Icon} alt="avatar"/>:null}
                        <div dangerouslySetInnerHTML={{ __html: makeTextBold(item[1]) }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PreviousChat;