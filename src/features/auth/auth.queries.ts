import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "./auth.api";

export const authQueryKeys = { session: ["auth", "session"] as const };

export function useAdminSession() {
  return useQuery({ queryKey: authQueryKeys.session, queryFn: authApi.session, retry: false });
}

export function useAdminLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (session) => queryClient.setQueryData(authQueryKeys.session, session),
  });
}

export function useAdminRegistration() {
  return useMutation({ mutationFn: authApi.register });
}

export function useAdminEmailVerification() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.verifyEmail,
    onSuccess: async (session) => queryClient.setQueryData(authQueryKeys.session, session),
  });
}

export function useAdminLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: async () => queryClient.removeQueries({ queryKey: authQueryKeys.session }),
  });
}
