import { useSelector } from "react-redux";
import { LuMessageSquare } from "react-icons/lu";

const Recents = () => {
    const recents = useSelector((store) => store.recents)
    return (
       <div>
        {
            recents.map((item, index) => (
                <div key={index} className="flex gap-2 pb-2 text-light  hover:text-blue-500 cursor-pointer">
                    <div className="mt-2">
                        <LuMessageSquare/>
                    </div>
                    {item}
                </div>
            ))
        }
       </div>
    );
};

export default Recents;