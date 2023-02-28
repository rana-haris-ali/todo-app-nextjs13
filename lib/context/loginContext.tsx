'use client';

import { createContext, useContext } from 'react';
// Creating the login context
const LoginContext = createContext<{
  isLoggedIn: boolean;
  userData: {
    token?: string;
    userId?: number;
    username?: string;
  };
}>({
  isLoggedIn: false,
  userData: { token: undefined, userId: undefined, username: undefined },
});

// Making the function which will wrap the whole app using Context Provider
export default function LoginStore({
  children,
}: {
  children: React.ReactNode;
}) {
  const loginData = localStorage.getItem('LoginData');
  const userData = JSON.parse(loginData as string);
  let isLoggedIn: boolean;

  loginData ? (isLoggedIn = true) : (isLoggedIn = false);

  return (
    <LoginContext.Provider
      value={
        isLoggedIn
          ? { isLoggedIn, userData }
          : {
              isLoggedIn,
              userData: {
                token: undefined,
                userId: undefined,
                username: undefined,
              },
            }
      }
    >
      {children}
    </LoginContext.Provider>
  );
}

// Make useLoginContext Hook to easily use our context throughout the application
export function useLoginContext() {
  return useContext(LoginContext);
}
