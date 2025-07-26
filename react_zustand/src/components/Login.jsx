import React from "react";
import { useAppStore } from "../zustand/store";

const Login = () => {
  const login = useAppStore((state) => state.login);
  return (
    <button onClick={() => login({ name: "JOhn" })}>
      Login
    </button>
  );
};

export default Login;
