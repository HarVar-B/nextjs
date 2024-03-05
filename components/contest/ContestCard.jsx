import React from 'react';
import moment from 'moment';
import styled from "styled-components";

import theme from "@/theme";
import {media} from '@/theme/media';
import Card from "@/components/common/Card";
import Chip, {ChipVariants} from "@/components/common/Chip";
import {PrimaryButton, SecondaryButton} from "@/components/common/Button";

const CCard = styled(Card)`
    width: 100%;
    height: 100%;
    padding: 30px 20px 30px 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.mdLg`padding: 25px 15px 25px 25px;`}
    ${media.sm`padding: 15px 10px 15px 15px;`}
`;
const TopContent = styled.div``;
const PostedByContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    ${media.md`margin-bottom:8px;`}
`;
const PostedByLogo = styled.img`
    height: 40px;
    margin-right: 10px;
    border-radius: 10px;
`;
const PostedBy = styled.span`
    color: ${p => p.theme.colors.silverChalice};
    font-size: 12px;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: 20px;
    text-transform: uppercase;
`;
const BottomContent = styled.div``;
const Title = styled.h3`
    margin-bottom: 10px;
    color: ${p => p.theme.colors.dark};
    font-size: ${p => p.theme.typography.subHeading.fontSize};
    font-weight: ${p => p.theme.typography.subHeading.fontWeight};
    line-height: ${p => p.theme.typography.subHeading.lineHeight};
    text-transform: ${p => p.theme.typography.subHeading.textTransform};
`;
const Details = styled.p`
    color: ${p => p.theme.colors.dark};;
    font-size: ${p => p.theme.typography.paragraph.fontSize};
    font-weight: ${p => p.theme.typography.paragraph.fontWeight};
    line-height: ${p => p.theme.typography.paragraph.lineHeight};
    text-transform: ${p => p.theme.typography.paragraph.textTransform};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
const Pills = styled.div`
    margin: 10px 0 20px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 5px 10px;
`;
const LocationBar = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const LocationIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;
    max-width: 65%;
`;
const LocationIcon = styled.img`
    width: 15px;
`;
const Location = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${p => p.theme.colors.dark};
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    text-transform: capitalize;
`;
const Duration = styled.p`
    color: ${p => p.theme.colors.silverChalice};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
`;
const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
const ViewDetailBtn = styled(SecondaryButton)`
    width: 50%;
    ${media.md`padding: 5px 0px;`}
`;
const ApplyBtn = styled(PrimaryButton)`
    width: 50%;
    ${media.md`padding: 5px 0px;`}
`;

const index = ({contest, showPostedBy = false}) => {
  const {project_location, roles, description, title, created_on, profile, payment} = contest;
  const {name, logo} = profile;
  return (
    <CCard>
      <TopContent>
        {showPostedBy ?
          <PostedByContainer>
            <PostedByLogo src={logo} alt={`${name}-logo`}/>
            <PostedBy>{name}</PostedBy>
          </PostedByContainer>
          : null}
        <Title>
          {title}
        </Title>
        <Details>
          {description}
        </Details>
        <Pills>
          {roles.map((tag, index) => (
            <Chip variant={ChipVariants.outlined} label={tag.label} key={index}/>
          ))}
          {payment?.amount > 0 ?
            <Chip variant={ChipVariants.block} color={theme.colors.secondaryComp} label={"paid"}/> : null}
        </Pills>
      </TopContent>

      <BottomContent>
        <LocationBar>
          <LocationIconContainer>
            <LocationIcon src="/home/location-fill-icon.svg"/> &nbsp;
            <Location>
              {project_location?.map((l) => {
                const [city, ...rest] = l.label.split(', ');
                return city
              }).join(', ')}
            </Location>
          </LocationIconContainer>
          <Duration>
            Posted {" "}{created_on && moment().diff(moment(created_on), 'days') == 0 ? moment().diff(moment(created_on), 'hours') + 'H' : moment().diff(moment(created_on), 'days') + 'D ago'}
          </Duration>
        </LocationBar>
        <Links>
          <ViewDetailBtn>View Details</ViewDetailBtn>
          <ApplyBtn>Apply</ApplyBtn>
        </Links>
      </BottomContent>
    </CCard>
  )
}

export default index
