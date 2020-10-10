import React, { createContext, useContext, useEffect, useState } from "react";

enum Status {
  Idle,
  Error,
  Pending,
  Finished,
}

type AuthProps = {
  token: string;
  setToken: (token: string) => void;
  status: Status;
  setStatus: (status: Status) => void;
};

const createCtx = <T extends unknown>() => {
  const ctx = createContext<T | undefined>(undefined);

  const useCtx = () => {
    const c = useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a provider with a value");

    return c;
  };

  return [useCtx, ctx.Provider] as const;
};

export const getToken = () => localStorage.getItem("token");
const initialToken = getToken() || "";

const [TokenGetterContext, TokenSetterContext] = [
  createContext<string>(initialToken),
  createContext<React.Dispatch<React.SetStateAction<string>> | null>(null),
];

const useToken = () => useContext(TokenGetterContext);
const useTokenSetter = () => useContext(TokenSetterContext);
const isAuthed = () => useToken() !== "" && useToken() !== null;

const AuthenticationProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(initialToken);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <TokenSetterContext.Provider value={setToken}>
      <TokenGetterContext.Provider value={token}>
        {children}
      </TokenGetterContext.Provider>
    </TokenSetterContext.Provider>
  );
};

export { AuthenticationProvider, isAuthed, useToken, useTokenSetter };
