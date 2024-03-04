import Link from 'next/link';
// import {useTranslation} from "next-i18next";
import styled, {css} from 'styled-components';
import React, {useEffect, useState} from 'react';
import {useWindowScroll} from "@uidotdev/usehooks";
import routes from "@/routes";
import {media} from "@/theme/media";
import useDropdown from "@/hooks/dropdown";
// import MegaMenu from '@/components/MegaMenu';
// import {UseCreativeTypes} from '@/hooks/profiles';
const Sticky = css`
    position: sticky;
    top: 0;
    transform: translateY(0px);
    transition: all .275s ease-in-out;
    -webkit-transition: all .275s ease-in-out;
    z-index: 1; // Need to come again on this to check if it works without z-index
`;
const GlossyBackground = css`
    background-color: hsla(0, 0%, 100%, .72);
    backdrop-filter: saturate(180%) blur(20px);
`;
const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;

    margin: 0 auto;

    display: flex;
    justify-content: center;

    ${Sticky}
    ${props => props.isScrolled && GlossyBackground};
    ${media.md`height: 80px;`}
    ${media.sm`height:60px;`}
`;
const NavSection = styled.nav`
    width: 100%;
    max-width: 1440px;

    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.md`padding: 0px 10px;`}
    ${media.sm`padding: 0px 5px;`}
`;
const LeftNavSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;
    ${media.md`gap:10px;`}
`;
const MenuIcon = styled.img`
    width: 40px;
    display: none;
    ${media.sm`display: block;`}
`;
const Logo = styled.img`
    height: 50px;
    ${media.sm`height: 40px;`}
`;
const MenuItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    list-style-type: none;
    overflow: hidden;
    ${media.md`gap: 25px; margin-left:0;`}
    ${media.sm`display: none;`}
`;
const MenuItem = styled.li`
    width: 33%;
    font-size: 16px;
    font-weight: ${p => p.theme.typography.heading.fontWeight};
    color: ${p => p.theme.colors.dark};
    cursor: pointer;
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding-bottom: 2px;

    &:hover {
        font-weight: ${p => p.theme.typography.caption.fontWeight};
        line-height: 40px;
        background: linear-gradient(${p => p.theme.colors.primary}, ${p => p.theme.colors.primary}) bottom no-repeat;
        background-size: 50% 4px;
    }

`;
const MenuLink = styled(Link)``;
const DropDownMenuLink = styled(MenuItem)`
    display: inline-block;
    position: relative;

    &:hover {
        /* line-height:40px; */
        background: linear-gradient(${p => p.theme.colors.primary}, ${p => p.theme.colors.primary}) bottom no-repeat;
        background-size: 50% 4px;
    }
`;
const RightNavSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    ${media.md`gap: 10px;`}
`;
const SearchIcon = styled.img`
    width: 25px;
    cursor: pointer;
    transition: all 0.3s linear;
`;
const CreateLink = styled(Link)`
    height: 40px;

    border-radius: 10px;
    padding: 10px 35px;
    background-color: ${p => p.theme.colors.dark};

    color: ${p => p.theme.colors.secondary};

    font-size: 14px;
    font-weight: ${p => p.theme.fontWeights.medium};

    transition: all 0.3s linear;

    cursor: pointer;

    &:hover {
        box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.25);
    }

    &::before {
        content: '+ Create';
    }

    ${media.md`
      width: 35px;
      height: 35px;
    
      font-size: 27px;
      font-weight: 500;
      
      line-height: 1.1;
      padding: 5px 8px;
      &::before{content: '+';}
    `}
`;
const LoginLink = styled(Link)`
    height: 40px;

    border: ${p => p.theme.colors.dark} 1px solid;
    border-radius: 10px;
    padding: 10px 35px;

    color: ${p => p.theme.colors.dark};

    font-size: ${p => p.theme.typography.paragraph.fontSize};
    font-weight: ${p => p.theme.typography.paragraph.fontWeight};

    transition: all 0.3s linear;

    cursor: pointer;

    &:hover {
        box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.25);
    }

    ${media.md`
      height: 35px;
      content: url('/home/user-icon.svg');
      padding: 6px 6px;
    `}
`;
const Navbar = () => {
  // const {t} = useTranslation('common');
  // const {creativesTypes} = UseCreativeTypes();
  const [dropdownContainerRef, isDropDownVisible, openDropdown, closeDropdown] = useDropdown();
  const [{y},] = useWindowScroll();
  return (
    <NavbarContainer isScrolled={y > 0}>
      <NavSection>
        <LeftNavSection>
          <Link href={routes.root}>
            <Logo alt='poké-deck' src={'/home/logo.svg'}/>
          </Link>
          <MenuIcon src="/home/menu-icon.svg" alt='Menu'/>
          <MenuItems>
            <MenuItem>
              <MenuLink href={routes.contests}>Contests</MenuLink>
            </MenuItem>
            <DropDownMenuLink
              ref={dropdownContainerRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <MenuLink href={routes.pokemon}>Pokémon</MenuLink>
              {/*<MegaMenu creativesTypes={creativesTypes} isVisible={isDropDownVisible}/>*/}
            </DropDownMenuLink>
            <MenuItem>
              <MenuLink href={routes.masters}>Masters</MenuLink>
            </MenuItem>
          </MenuItems>
        </LeftNavSection>
        <RightNavSection>
          <SearchIcon src="/home/search-icon.svg" alt='Search'/>
          <CreateLink href={routes.register}/>
          <LoginLink href={routes.login}>Log In</LoginLink>
        </RightNavSection>
      </NavSection>
    </NavbarContainer>
  )
}

export default Navbar
