// src/app/queryClient.js
import { QueryClient } from "@tanstack/react-query";
export default new QueryClient({
  defaultOptions:{ queries:{ staleTime:60_000, retry:1, refetchOnWindowFocus:false } }
});
