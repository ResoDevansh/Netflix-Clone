import { useMyContext } from "../utils/Provider";

const SignUp = () => {
  const globalState = useMyContext();
  console.log(globalState.enteredEmail);
  return (
    <div
      style={{ color: "red", border: "1px solid black", background: "pink" }}
    >
      {globalState.enteredEmail
        ? `${globalState.enteredEmail}`
        : "oops you refreshed the page"}
    </div>
  );
};

export default SignUp;
