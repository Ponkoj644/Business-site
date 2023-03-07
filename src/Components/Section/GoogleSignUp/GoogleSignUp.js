import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./GoogleSignUp.css";

const GoogleSignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p className="text-center"> Congratulation! Registration Successful!</p>
      </div>
    );
  }
  return (
    <div>
      <Button
        className="btn btn-defult mb-1"
        onClick={() => signInWithGoogle()}
        type="submit"
      >
        Continue with Google
      </Button>
    </div>
  );
};

export default GoogleSignUp;
