import React from 'react';
import Link from "next/link";
import styled from "styled-components";
import routes from "@/routes";
import {media} from "@/theme/media";

const HeroContainer = styled.div`
    height: 600px;

    background-image: url(/home/hero-image.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 20px;
    ${media.sm`
      background-position: 30% 10%;
      height: 120vw;
      width: calc(100vw - 10px);
      margin: 20px auto;
    `}
`;
const HeroContent = styled.div`
    width: 50%;
    height: 100%;

    border-radius: 20px;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);

    padding-left: 7.4%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    ${media.mdLg`width:60%;`}
    ${media.md`width: 75%;padding-left: 6.25%;`}
    ${media.sm`width: 100%;padding: 0px 35px;`}
`;
const HeroTitle = styled.h1`
    color: ${p => p.theme.colors.light};
    font-size: ${p => p.theme.typography.heading.fontSize}; //70px
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: 80px;
    margin: 20px 0;
    ${media.lg`font-size: 60px;`}
    ${media.sm`
        font-size: 40px;
        line-height: 40px;
    `}
`;
const HeroBullets = styled.ul`
    //margin: 40px 0 60px 20px;
    color: ${p => p.theme.colors.light};

    ${media.sm`
        // margin: 25px 0px 25px 15px;
    `}
`;
const HeroBullet = styled.li`
    font-size: 20px;
    font-weight: 400;

    ${media.sm`
        font-size: 14px;
        font-weight: 400;
        line-height: 2;
    `}
`;
const HeroCTA = styled(Link)`
    width: fit-content;
    border-radius: 10px;

    background: ${p => p.theme.colors.secondary};

    padding: 15px;

    color: ${p => p.theme.colors.dark};
    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }
`;

// TODO: Achieve mock-ups for both mobile and desktop with only changing styles and no more or less HTML nodes than provided below
const Hero = () => {
  return (
    <HeroContainer id={'hero'}>
      <HeroContent>
        <HeroTitle>Catch 'em All</HeroTitle>
        <HeroBullets>
          <HeroBullet>Easy Profile Creation</HeroBullet>
          <HeroBullet>Advanced Search and Filters</HeroBullet>
          <HeroBullet>Messaging and Communication Platform</HeroBullet>
          <HeroBullet>Contests hosting & Management</HeroBullet>
        </HeroBullets>
        <HeroCTA href={routes.pokemon}>Look For Pokémon</HeroCTA>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
