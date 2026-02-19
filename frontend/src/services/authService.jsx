import React from "react";
import { fetcher } from "./api";

export const loginService = (payload) => {
  return fetcher("/login", {
    method: "POST",
    body: payload,
  });
};

export const registerService = (payload) => {
  return fetcher("/register", {
    method: "POST",
    body: payload,
  });
};

export const logoutService = () => {
  return fetcher("/logout", {
    method: "POST",
  });
};
