import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE } from '../utils/constant';
import { USER_ICON } from './../utils/constant';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: 'https://avatars.githubusercontent.com/u/54229927?v=4'
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + '-' + errorMessage);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => { })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background-image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 my-36 mx-auto right-0 left-0 bg-black w-3/12 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input type="text" placeholder="Name" ref={name} className="p-2 my-2 w-full bg-gray-700" />}
        <input type="email" placeholder="Email Address" ref={email} className="p-2 my-2 w-full  bg-gray-700" />
        <input type="password" placeholder="Password" ref={password} className="p-2 my-2 w-full  bg-gray-700" />
        {errorMessage && <p className="py-4 text-red-500 font-bold text-lg">{errorMessage}</p>}
        <button onClick={handleButtonClick} className="p-2 my-2 rounded-lg bg-red-700 w-full">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="p-2" onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign up now.' : 'Already Registered, Sing in now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
