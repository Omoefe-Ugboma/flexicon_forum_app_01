// import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function LoginModal() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  // const navigate = useNavigate();

  return (
    <>
      {isSignUpModalOpen ? (
        <Signup closeSignUp={closeSignUpModal} />
      ) : (
        <Login openSignUp={openSignUpModal} />
      )}
    </>
  );
}

export default LoginModal;
