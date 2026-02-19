import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { dashboardService, logService } from "../services/dashboardService";

export const useDashboardOverview = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => dashboardService(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
};

export const useMedicationLog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => logService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
      queryClient.invalidateQueries({
        queryKey: ["activity"],
      });
    },
  });
};
