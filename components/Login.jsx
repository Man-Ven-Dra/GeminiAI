import { useRef, useState } from "react";
import { AVATAR, google_logo } from "../utils/constants";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase_logic";
import Header from "./Header";

const Login = () => {
    const [changeMode ,setChangeMode] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleClick = () => {
        const value = validate(email.current.value, password.current.value)
        if(value) setErrorMessage(value);

        if(!changeMode){
        createUserWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value)
        .then((userCredential) => { 
            const user = userCredential.user;
            console.log(user)
            updateProfile(user, {
                displayName: name.current.value, photoURL: AVATAR
            }).then(() => {

            }).catch((error) => {
                setErrorMessage(error.message)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode+' '+errorMessage)
        });
        } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode+' '+errorMessage)
        });
        }
    }

    return (
        <div className="h-screen border-2 flex justify-center items-center">
            <Header/>
            <div className="w-96 h-[30rem] rounded-md flex justify-center">
                <div className="w-full flex flex-col items-center border-[1px] rounded-md shadow-xl">
                    <img src={google_logo} className="h-[2.5rem] mt-[2rem]"/>
                    <div className="font-semibold text-[1.3rem] flex justify-center mt-4">{(changeMode)?'Sign in':'Sign up'}</div>
                    <div className="flex justify-center mt-2 mb-8">{(changeMode)?'Use your Google Account':'Create a new Google Account'}</div>
                    {(!changeMode)&&<input ref={name} className=" border-2 rounded-md w-5/6 h-[2.5rem] p-1 outline-blue-500" type="text" placeholder="Username"/>}
                    <input ref={email} className=" border-2 rounded-md w-5/6 h-[2.5rem] mt-4 p-1 outline-blue-500" type="email" placeholder="Email"/>
                    <input ref={password} className="border-2 rounded-md w-5/6 h-[2.5rem] mt-4 p-1 outline-blue-500" type="password" placeholder="Password"/>
                    <div className="text-red-600 mt-1">{errorMessage}</div>
                    <div className="flex justify-around items-center mt-[3.5rem] w-full">
                        <div className="text-blue-600 text-[1.1rem] cursor-pointer" onClick={()=>{setChangeMode(!changeMode)||setErrorMessage(null)}}>{(changeMode)?'Create account':'Back'}</div>
                        <div className="rounded-md bg-blue-600 px-6 py-1 text-[1.1rem] text-white cursor-pointer" onClick={handleClick}>Next</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;