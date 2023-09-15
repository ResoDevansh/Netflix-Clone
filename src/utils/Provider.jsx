import { useState, useEffect } from "react";
import { MyContext } from "./utils";
import PropTypes from "prop-types";

// const MyContext = createContext();

const UserSignUp = ({ children }) => {
  const [enteredEmail, setEnteredEmail] = useState(
    JSON.parse(sessionStorage.getItem("enteredEmail")) || ""
  );
  const [password, setPassword] = useState("");

  useEffect(() => {
    sessionStorage.setItem("enteredEmail", JSON.stringify(enteredEmail));
  }, [enteredEmail]);

  // console.log(enteredEmail);
  return (
    <MyContext.Provider
      value={{ enteredEmail, setEnteredEmail, password, setPassword }}
    >
      {children}
    </MyContext.Provider>
  );
};

UserSignUp.displayName = "RegForm";
UserSignUp.propTypes = { children: PropTypes.node };

export default UserSignUp;
