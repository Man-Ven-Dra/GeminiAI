import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, } from "react";
import { auth } from "../utils/firebase_logic";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((store) => store.user)

    const handleClick = () => {
        signOut(auth).then(() => {}
            ).catch((error) => {
            console.log(error);
            navigate("/error")
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const{ uid, email, displayName, photoURL }= user;
              dispatch(addUser({
                uid: uid, 
                email: email, 
                displayName: displayName,
                photoURL: photoURL
              }))
                navigate("/home")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
          });

          return () => unsubscribe();
    }, [])
    return (
    <>
        {(userInfo)?<div className="w-full flex px-5 justify-between mt-5 items-center">
            <div className="text-gray-500 text-[1.7rem]">Gemini</div>
            <img className="w-[2.7rem] rounded-full cursor-pointer" src={userInfo?.photoURL} alt="avatar" onClick={handleClick}/>
        </div>:null}
    </>
    );
};

export default Header;