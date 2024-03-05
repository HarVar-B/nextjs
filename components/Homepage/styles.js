import styled from "styled-components";
import {media} from "@/theme/media";
import Link from "next/link";
import {RightFloatingAction} from "@/styles/common";

export const SectionContainer = styled.div`
    margin: 100px 0;
    ${media.xxl`margin: 50px;padding: 0 20px;`}
    ${media.xl`margin: 50px 20px;padding: 0 20px;`}
    ${media.lg`margin: 50px 20px;padding: 0 20px;`}
    ${media.md`margin: 35px 20px;padding: 0 20px;`}
    ${media.sm`padding: 0 5px; margin: 25px 0;`}
`;
export const SectionHeading = styled.h2`
    margin-bottom: 30px;
    font-size: 50px;
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.typography.heading.lineHeight};
    color: ${p => p.theme.colors.dark};

    ${media.md`
        margin-bottom: 20px;
        font-size: 35px;
    `}
    ${media.sm`margin-bottom: 10px;`}
`;
export const ViewAll = styled(Link)`
    ${RightFloatingAction};
    margin-top: 20px;
    ${media.md`
        margin-top: 15px;
    `}
`;
