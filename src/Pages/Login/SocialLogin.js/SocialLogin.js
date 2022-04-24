import React from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from "../../../images/socialLogo/Google.png"
import facebook from "../../../images/socialLogo/f_logo_RGB-Blue_1024.png"
import github from "../../../images/socialLogo/github-icon-clipart-7.png"
import { useNavigate ,useLocation} from 'react-router-dom';
const SocialLogin = () => {
const navigate=useNavigate()
const location=useLocation()
let from = location.state?.from?.pathname || "/";
const [signInWithGoogle,user, loading, error] = useSignInWithGoogle(auth);
const [signInWithGithub,user1, loading1, error1] = useSignInWithGithub(auth);
   
    const handleGoogleLogin=()=>{
        signInWithGoogle()
    }
const handleGithubLogin=()=>{
    signInWithGithub()
}
     if(user||user1){
        navigate(from,{replace:true})
    }
    if(error||error1){
        console.log(error)
    }
    return (
        <div>
            <div className='d-flex align-items-center'><div style={{height:"1px"}} className="w-50 bg-primary"></div>
            <div><p>or</p></div>
            <div style={{height:"1px"}} className="w-50 bg-primary"></div></div>
            
            <button
             className='btn btn-outline-primary w-100'
            onClick={handleGoogleLogin}
            >
              <img src={google} alt="" style={{width:"30px"}}/>
                <span>signIn with google</span>                 
                </button>
            <button className='btn btn-outline-primary w-100 my-2'>
                <img src={facebook} alt="" />
                signIn with facebook </button>
            <button
             className='btn btn-outline-primary w-100'
             onClick={handleGithubLogin}
             >
                <img src={github} alt="" />
                signIn with Github </button>
           
        </div>
    );
};

export default SocialLogin;