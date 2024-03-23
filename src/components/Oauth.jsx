import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignInFailure,SignInSuccess,SignInstart } from '../Redux/UserSlice'
import { useDispatch } from 'react-redux'

export default function Oauth() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const auth = getAuth(app);

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            dispatch(SignInstart())
            // Sign in with Google popup
            const resultsFromGoogle = await signInWithPopup(auth, provider);

            // Extract user information
            const { email, displayName, photoURL } = resultsFromGoogle.user;

            // Prepare user data
            const userData = {
                email,
                name: displayName,
                profilePicture: photoURL
              }
              
              const res = await axios.post('https://backend-n80g.onrender.com/api/user/google', userData);
              if(res.status === 200){
                dispatch(SignInSuccess(res.data))
                navigate('/')
                console.log("Log in with google success")
              }
        } catch (error) {
            dispatch(SignInFailure(res.message))
            console.error(error.message);
        }
    };

    return (
        <Button type='button' outline onClick={handleGoogleClick}>
            <AiFillGoogleCircle className='w-6 h-6 mr-2' />
            Continue with Google
        </Button>
    );
}
