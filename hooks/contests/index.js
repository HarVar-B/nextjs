import useSWR from "swr";
import fetcher from "@/fetcher";
import {useEffect} from "react";

export const UseFeaturedContests = () => {
  const {
    data,
    isLoading,
    isError
  } = useSWR(`/api/contests/featured`, fetcher)

  useEffect(() => {
    console.log(data)
  }, [data]);

  return {
    featuredContests: data || [],
    isLoading,
    isError
  }
}
