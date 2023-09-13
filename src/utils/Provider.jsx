import { useContext, createContext, useState, useEffect } from "react";

const MyContext = createContext();

const UserSignUp = ({ children }) => {
  const [enteredEmail, setEnteredEmail] = useState(
    JSON.parse(localStorage.getItem("enteredEmail")) || ""
  );

  useEffect(() => {
    localStorage.setItem("enteredEmail", JSON.stringify(enteredEmail));
  }, [enteredEmail]);

  // console.log(enteredEmail);
  return (
    <MyContext.Provider value={{ enteredEmail, setEnteredEmail }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

export default UserSignUp;
