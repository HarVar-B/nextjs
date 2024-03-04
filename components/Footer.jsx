import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import routes from '@/routes';
import {media} from '@/theme/media';

const mapIconToPath = {
  logo: "/home/logo.svg",
  facebookIcon: "/home/facebook-icon.svg",
  instagramIcon: "/home/instagram-icon.svg",
  twitterIcon: "/home/twitter-icon.svg",
  locationFillIcon: "/home/location-fill-icon.svg",
  phoneIcon: "/home/phone-icon.svg",
}
const socialLinks = {
  facebook: "https://www.facebook.com/HARshaVARdhanaBoorla",
  instagram: "https://www.instagram.com/harvar_072/",
  twitter: "https://twitter.com/HarVarB",
}
const addressDetails = {
  address: "Minato, Roppongi Hills Mori Tower 8F, Japan",
  phone: "+91 98765 43210",
}

const FooterContainer = styled.footer`
    background-color: ${p => p.theme.colors.light};
    padding: 50px 100px 0 100px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    flex-wrap: wrap;

    ${media.md`
    flex-direction: column;
    padding: 50px 10px;
  `}
`;
const FooterColumn = styled.div`
    flex: 1;
    padding: 20px;

    ${media.md`
    padding: 0 10px;
  `}
`;
const Logo = styled.img`
    max-width: 100%;
    height: 60px;
`;
const FooterTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 600;
`;
const SocialLinks = styled.div`
    margin-top: 140px;
    display: flex;
    gap: 15px;

    ${media.md`
        margin-top: 20px;
        gap: 40px; 
        margin-bottom: 50px;   
    `}
`;
const SocialLink = styled(Link)`
    padding: 15px 15px;
    border: 1px solid ${p => p.theme.colors.tertiaryLight};
    background-color: ${p => p.theme.colors.tertiaryLight};
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    transition: all 0.3s linear;

    &:hover {
        box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.25);
    }
`;
const SocialLinkIcon = styled.img`
    width: 25px;
    height: 25px;
`;
const FooterColumnMiddle = styled.div`
    flex: 2;
    padding: 20px;

    ${media.md`
    padding: 0 10px;
  `}
`;
const FooterLinksContainer = styled.div`
    display: flex;
    gap: 100px;
    margin-bottom: 20px;

    ${media.md`
    flex-direction: column;
    gap: 0;
  `}
`;
const FooterLinkContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const FooterLink = styled(Link)`
    margin-bottom: 20px;
    color: ${p => p.theme.colors.dark};
    text-decoration: none;
    cursor: pointer;
`;
const HorizontalLine = styled.hr`
    stroke-width: 1px;
    stroke: ${p => p.theme.colors.silverChaliceLight};
    width: 60%;
    margin-bottom: 4px;

    ${media.md`display: none;`}
`;
const FooterTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    ${media.md`
        margin-bottom: 10px;
    `}
`;
const AddressContainer = styled.div`
    margin: 10px 0;
    display: flex;
    gap: 10px;
`;
const Address = styled.address`
    color: ${p => p.theme.colors.dark};
    font-style: normal;

    ${media.md`margin-bottom: 20px;`}
`;
const Image = styled.img`
    width: 15px;
    height: 23px;
`;
const Phone = styled(Link)`
    color: ${p => p.theme.colors.dark};
`;
const SubscriptionForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    input {
        margin-right: 10px;
        border-radius: 10px;
        border: 1px solid ${p => p.theme.colors.silverChalice};
        padding: 15px 18px;
        width: 80%;
        text-align: left;
        text-transform: capitalize;
        font-size: 14px;
    }

    button {
        border-radius: 10px;
        background-color: ${p => p.theme.colors.dark};
        color: ${p => p.theme.colors.light};
        padding: 15px 18px;
        border: none;
        cursor: pointer;
    }
`;
const CopyrightContainer = styled.div`
    background-color: ${p => p.theme.colors.dark};
    padding: 10px;
`;
const CopyRightContent = styled.p`
    color: ${p => p.theme.colors.light};
    text-align: center;
    font-size: 14px;
    text-transform: capitalize;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterColumn>
          <Logo src={mapIconToPath.logo} alt="Logo"/>
          <SocialLinks>
            <SocialLink href={socialLinks.facebook} target='_blank'>
              <SocialLinkIcon alt="facebook" src={mapIconToPath.facebookIcon}/>
            </SocialLink>
            <SocialLink href={socialLinks.instagram} target='_blank'>
              <SocialLinkIcon alt="instagram" src={mapIconToPath.instagramIcon}/>
            </SocialLink>
            <SocialLink href={socialLinks.twitter} target='_blank'>
              <SocialLinkIcon alt="twitter" src={mapIconToPath.twitterIcon}/>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        <FooterColumnMiddle>
          <FooterLinksContainer>
            <FooterLinkContainer>
              <FooterTitle>For Masters</FooterTitle>
              <FooterLink href={routes.pokemon}>Browse Pokémon</FooterLink>
              <FooterLink href={routes.contests}>Browse Contests</FooterLink>
            </FooterLinkContainer>
          </FooterLinksContainer>
          <FooterTitleContainer>
            <FooterTitle>Others</FooterTitle>
            <HorizontalLine/>
          </FooterTitleContainer>
          <FooterLinksContainer>
            <FooterLinkContainer>
              <FooterLink
                href={routes.root}
              >Terms & Condition</FooterLink>
              <FooterLink
                href={routes.root}
              >Privacy Policy</FooterLink>
              <FooterLink
                href={routes.root}
              >Refund Cancellation Policy</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink
                href={routes.root}
              >Shipping & Delivery</FooterLink>
              <FooterLink
                href={routes.root}
              >Pricing</FooterLink>
              <FooterLink
                href={routes.root}
              >Contact Us</FooterLink>
            </FooterLinkContainer>
          </FooterLinksContainer>
        </FooterColumnMiddle>

        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <AddressContainer>
            <Image src={mapIconToPath.locationFillIcon} alt="Location"/>
            <Address>
              {addressDetails.address}
            </Address>
          </AddressContainer>
          <AddressContainer>
            <Image src={mapIconToPath.phoneIcon} alt="Phone"/>
            <Phone href={`tel:${addressDetails.phone}`}>
              {addressDetails.phone}
            </Phone>
          </AddressContainer>
          <SubscriptionForm>
            <input type="email" placeholder="Enter email to subscribe"/>
            <button type="submit">
              →
            </button>
          </SubscriptionForm>
        </FooterColumn>
      </FooterContainer>
      <CopyrightContainer>
        <CopyRightContent>
          © {new Date().getFullYear()} No Right Reserved.
        </CopyRightContent>
      </CopyrightContainer>
    </>
  );
};

export default Footer;
