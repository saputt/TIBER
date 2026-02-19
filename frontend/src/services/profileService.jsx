import { fetcher } from "./api";

export const profileService = (payload) => {
  return fetcher("/user", {
    method: "PUT",
    body: payload,
  });
};
