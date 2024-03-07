import React from "react";
import styled from "styled-components";

import routes from "@/routes";
import {device, media} from "@/theme/media";
import { useWindowSize } from "@uidotdev/usehooks";
import PokemonCard from "@/components/pokemon/PokemonCard";
import {SectionContainer, SectionHeading, ViewAll} from "./styles";
import {useTrendingPokemon} from "@/hooks/pokemon";

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, ${p => p.contentCount > 2 ? "1fr" : "300px"}));
    gap: 20px;
    ${media.md`
      grid-template-columns: repeat(auto-fit, minmax(250px,${p => p.contentCount > 2 ? "1fr" : "300px"}));
      grid-gap: 15px;
    `}
    ${media.sm`
      grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
      grid-gap:10px;
    `}
`;

function TrendingPokemon() {
  const {trendingPokemon} = useTrendingPokemon();

  return (
    <SectionContainer id={'featured-creatives'}>
      <SectionHeading>
        Trending Pokémon
      </SectionHeading>
      <Cards contentCount={trendingPokemon.length}>
        {trendingPokemon.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} variant={'vr'} key={index}/>
        ))}
      </Cards>
      <ViewAll href={routes.pokemon}>{`View All  >>`}</ViewAll>
    </SectionContainer>
  )
}

export default TrendingPokemon;
