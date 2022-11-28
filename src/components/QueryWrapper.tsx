import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

interface QueryWrapperType {
  children: ReactNode;
}

export const QueryWrapper: FC<QueryWrapperType> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
