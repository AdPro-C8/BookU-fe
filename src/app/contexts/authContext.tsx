"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextData {
  token: string;
  setToken: (newToken: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setAuthToken] = useState("");

  const setToken = (newToken: string) => {
    setAuthToken(newToken);
    window.localStorage.setItem("token", newToken);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}