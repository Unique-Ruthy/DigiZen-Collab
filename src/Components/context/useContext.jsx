import { createContext, useState } from "react";
export const UserContext = createContext({});
// we create  use context to hava a global state data to pass its children, we export the data for the children to use
const UseContextParent = ({children}) => {
  //   update data in our context
  const [data, setData] = useState({});
  // console.log(data, ">>>data from context");

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UseContextParent;
