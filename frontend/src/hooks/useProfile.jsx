import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import {
  getPersonalizationService,
  updatePersonalizationService,
} from "../services/personalizationService";
import { profileService } from "../services/profileService";
import { usePersonalizationStore } from "../store/usePersonalizationStore";
import { useProfileStore } from "../store/useProfileStore";

export const useUpdatePersonalization = () => {
  const queryClient = useQueryClient();
  const setPersonalization = useProfileStore((state) => state.setPersonalization);

  return useMutation({
    mutationFn: (payload) => updatePersonalizationService(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["personalization"] });

      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
};

export const useGetPersonalization = () => {
  return useQuery({
    queryKey: ["personalization"],
    queryFn: () => getPersonalizationService(),
    staleTime: 1000 * 60 * 10, // Data dianggap "fresh" selama 10 menit
    refetchOnWindowFocus: false, // Matiin refetch otomatis pas buka tab lain
    refetchOnMount: false, // Gak perlu fetch ulang kalau datanya udah ada di cache
  });
};

export const useProfile = () => {
  return useMutation({
    mutationFn: (payload) => profileService(payload),
    onSuccess: (data) => {
    }
  });
};

export const useUser = () => {
  return useMutation({
    mutationFn: (payload) => profileService(payload),
    onSuccess: (data) => {
    }
  });
};
