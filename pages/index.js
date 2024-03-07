import React from 'react';
import Hero from "@/sections/Homepage/Hero";
import Contests from "@/sections/Homepage/contests";
import PopularTypes from "@/sections/Homepage/types";
import TrendingPokemon from "@/sections/Homepage/trendingPokemon";

export default function Home() {
  return (
    <>
      <Hero/>
      <Contests/>
      <PopularTypes/>
      <TrendingPokemon/>
    </>
  );
}
