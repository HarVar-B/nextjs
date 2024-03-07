import useSWR from "swr";
import fetcher from "@/fetcher";

export const UseFeaturedContests = () => {
  const {
    data,
    isLoading,
    isError
  } = useSWR(`/api/contests/featured`, fetcher)

  return {
    featuredContests: data || [],
    isLoading,
    isError
  }
}
