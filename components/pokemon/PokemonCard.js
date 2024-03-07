import React from 'react';
import * as PropTypes from "prop-types";
import styled, {css} from "styled-components";
import {media} from "@/theme/media";
import Chip from "@/components/common/Chip";
import Card from "@/components/common/Card";
import {PrimaryButtonV2, SecondaryButton} from "@/components/common/Button";
import Link from "next/link";

const PCard = styled(Card)`
    ${p => p.variant === 'hr' ?
            css`width: 600px;
                height: 300px;
                ${media.xl`width:500px;height:250px;padding:10px;`}`
            : css`width: 100%;
                height: 100%;`
    }
    display: flex;
    flex-direction: ${p => p.variant === 'hr' ? 'row' : 'column'};
    gap: 20px;
`;
const FeaturedPicture = styled.img`
    ${p => p.variant === 'hr' ? css`width: 270px;height: 270px;${media.xl`width:225px;height:225px`}` 
            : css`width: 100%;${media.sm`margin: 0 auto;`}`}
    flex-shrink: 0;
    border-radius: 20px;
`;
const FlexColSpread = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const FlexRowSpread = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Name = styled.h3`
    color: ${p => p.theme.colors.dark};
    font-size: 20px;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    text-transform: capitalize;
    margin-top: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

`;
const Types = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 0;
    flex-wrap: wrap;
`;
const Location = styled.p``;

function PokemonCard({pokemon, variant = 'vr'}) {
  const {city=[], types, name, id, sprites:{front_default}} = pokemon;
  return <PCard variant={variant}>
    <FeaturedPicture src={front_default} alt="pokemon-featured-picture"
                     variant={variant}/>
    <FlexColSpread>
      <div>
        <Name>{name}</Name>
        {city[0] ? <Location>{city[0]?.name}</Location> : null}
        <Types>
          {types.map(({type:{name}}, index) => <Chip variant={'outlined'} label={name} key={index}/>)}
        </Types>
      </div>
      <FlexRowSpread>
        <Link href={`pokemon/${id}`}>
          <SecondaryButton>View Details</SecondaryButton>
        </Link> &nbsp;
        <PrimaryButtonV2>Locate</PrimaryButtonV2>
      </FlexRowSpread>
    </FlexColSpread>
  </PCard>
}

PokemonCard.propTypes = {pokemon: PropTypes.any, variant: PropTypes.string};


export default PokemonCard;
