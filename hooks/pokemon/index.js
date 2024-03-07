import useSWR from "swr";
import fetcher from "@/fetcher";
import {useEffect} from "react";

export const usePokemonTypes = () =>{
  const {data, isLoading, isError} = useSWR(`/api/pokemon/types`,fetcher)
  // useEffect(() => {
  //   console.log(data)
  // }, [data]);
  return {
    pokemonTypes: (data || []).map((_)=>({..._, img:`/pokemon/types/${_.id}.png`})),
    isLoading,
    isError
  }
}

export const useTrendingPokemon = () => {
  const {data, isLoading, isError} = useSWR(`/api/pokemon/`,fetcher)
  useEffect(() => {
    console.log(data)
  }, [data]);
  return {trendingPokemon:data||[], isLoading, isError}
}
