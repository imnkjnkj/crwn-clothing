import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
  } from '../../utils/firebase/firebase.utils';
  import SignInForm from '../../components/sign-up-form/SignUpForm'
  const SignIn = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <SignInForm />
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <button onClick={signInWithGoogleRedirect}>Sign in with Google Popup redirect</button>
      </div>
    );
  };
  
  export default SignIn;