import styled, {css} from "styled-components";
import {media} from "@/theme/media";

export const CardStyles = css`
    border-radius: 30px;
    box-shadow: 10px 20px 50px 0 ${p => p.theme.colors.blackShadow};
    padding: 15px;

    background: ${p => p.theme.colors.light};

    ${media.md`
        box-shadow: 5px 5px 10px 0px ${p => p.theme.colors.blackShadow};
        border-radius: 20px;
    `}
`;
const Card = styled.div`
    ${CardStyles}
`;

export default Card;
