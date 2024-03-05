import React from 'react'
import styled from "styled-components";
import routes from '@/routes';
import {media} from '@/theme/media';
import {UseFeaturedContests} from "@/hooks/contests";
import ContestCard from "@/components/contest/ContestCard";
import {SectionContainer, SectionHeading, ViewAll} from "@/sections/Homepage/styles";

const OpportunityCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px,${p=>p.contentCount>2?"1fr":"440px"}));
    grid-gap: 30px;
    
    ${media.md`
      grid-template-columns: repeat(auto-fit, minmax(300px,${p=>p.contentCount>2?"1fr":"400px"}));
      grid-gap: 15px;
    `}
    ${media.sm`
      grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
      grid-gap:10px;
    `}
`;

const Contests = () => {
  const {featuredContests} = UseFeaturedContests();
  console.log(featuredContests)
  return (
    <SectionContainer>
      <SectionHeading>
        Contests
      </SectionHeading>
      <OpportunityCards contentCount={featuredContests.length}>
        {featuredContests?.map((contest, index) => (
          <ContestCard key={index} contest={contest}/>
        ))}
      </OpportunityCards>
      <ViewAll href={routes.contests}>{`View All  >>`}</ViewAll>
    </SectionContainer>
  )
}


export default Contests
