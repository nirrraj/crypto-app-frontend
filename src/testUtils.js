import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser",
  email: "test@test.net",
  nativeFiatCurrency: "USD",
};

const UserProvider =
    ({ children, currentUser = demoUser }) => (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
);

export { UserProvider };