import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  activityWeekly,
  activityMonthly,
  activityOverviewService,
  addDailyNotes,
  editDailyNotes,
  getDailyNotes,
} from "../services/activityService";

export const useActivityOverview = () => {
  return useQuery({
    queryKey: ["activity", "overview"],
    queryFn: () => activityOverviewService(),
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useActivityMonth = (numberMonth) => {
  return useQuery({
    queryKey: ["month", numberMonth],
    queryFn: () => activityMonthly(numberMonth),
    enabled: !!numberMonth,
    staleTime: 60 * 60 * 1000,
  });
};

export const useActivityWeek = (weekStart) => {
  return useQuery({
    queryKey: ["week", weekStart],
    queryFn: () => activityWeekly(weekStart),
    enabled: !!weekStart,
    staleTime: 60 * 60 * 1000,
  });
};

export const useGetDailyNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: () => getDailyNotes(),
  });
};

export const useEditDailyNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => editDailyNotes(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });
};

export const useAddDailyNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => addDailyNotes(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });
};
