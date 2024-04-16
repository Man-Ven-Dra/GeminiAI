import { useSelector } from "react-redux";
import { Gemini_Icon } from "../utils/constants";

const ShimmerEffect = () => {
    const userInfo = useSelector((store) => store.user)
    const prompt = useSelector((store) => store.prompt)

  return (
    <div className="w-full mt-10 bg-white rounded h-[29rem]">
        <div className="flex items-center gap-4 mx-1 my-3 font-medium">
                    <img className="w-[1.7rem] rounded-full" src={userInfo?.photoURL} alt="avatar"/>
                    {prompt}
                </div>
      <div className="animate-pulse flex space-x-4 m-1">
        <div className="rounded-full h-8 w-8 ">
        <img className="w-[1.7rem] h-[1.7rem] rounded-full" src={Gemini_Icon} alt="avatar"/>
        </div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-3 bg-gray-300 rounded w-3/4 bg-gradient-to-r from-blue-400 to-red-300"></div>
          <div className="space-y-2 ">
            <div className="h-3 bg-gray-300 rounded bg-gradient-to-r from-blue-400 to-red-200"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6 bg-gradient-to-r from-blue-400 to-red-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerEffect;
