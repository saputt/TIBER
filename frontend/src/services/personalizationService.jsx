import { fetcher } from "./api";

export const updatePersonalizationService = (payload) => {
  return fetcher("/personalization", {
    method: "PUT",
    body: payload,
  });
};

export const getPersonalizationService = (payload) => {
  return fetcher("/personalization", {
    method: "GET",
    body: payload,
  });
};
