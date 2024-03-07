import React from 'react';
import styled from "styled-components";
import routes from '@/routes';
import {media} from '@/theme/media';
import Card from "@/components/common/Card";
import {SectionContainer, SectionHeading, ViewAll} from "./styles";
import {usePokemonTypes} from "@/hooks/pokemon";

const Services = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    ${media.xl`justify-content: space-around;`}
    ${media.sm`justify-content: space-evenly; gap: 10px;`}
`;
const PopularServiceCard = styled(Card)`
    width: 200px;
    height: 250px;
    background-color: ${p => p.theme.colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${media.md`
        width: 140px;
        height: 160px;
        padding: 10px;
        justify-content: space-around;
    `}
`;
const Img = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 20px;

    ${media.md`
      width: 100px;
      height: 100px;
      
    `}
`;
const Title = styled.h3`
    font-size: 16px;
    line-height: 50px;
    width: fit-content;
    text-transform: ${p => p.theme.typography.caption.textTransform};
    font-weight: ${p => p.theme.fontWeights.semiBold};

    ${media.md`
        font-size: 12px;
        line-height: 20px;
        margin-top: 10px;
    `}
`;

const PopularTypes = () => {
  const {pokemonTypes, isLoading, isError}=usePokemonTypes()
  return <SectionContainer id={"popular-types"}>
    <SectionHeading>Popular Types</SectionHeading>
    <Services>
      {pokemonTypes.map(({id, label, img}, index) =>
        <PopularServiceCard key={index}>
          <Img alt={id} src={img}/>
          <Title>{label}</Title>
        </PopularServiceCard>)}
    </Services>
    <ViewAll href={routes.pokemon}>{`View All  >>`}</ViewAll>
  </SectionContainer>
}

export default PopularTypes
