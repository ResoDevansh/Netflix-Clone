import { useState, useEffect } from "react";
import { MyContext } from "./utils";
import PropTypes from "prop-types";

const DataRoot = ({ children }) => {
  const [user, setUser] = useState(null);
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
      value={{
        user,
        setUser,
        enteredEmail,
        setEnteredEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

DataRoot.displayName = "DataRoot";
DataRoot.propTypes = { children: PropTypes.node };

export default DataRoot;
