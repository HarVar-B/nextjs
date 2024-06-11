import styled, {css} from "styled-components";

export const RelativePosition = css`
    position: relative;
`;
export const RelativeContainer = styled.div` ${RelativePosition} `;
export const RightFloatingAction = css`
    width: fit-content;
    float: right;
    color: ${p => p.theme.colors.ceruleanBlue};
    font-size: 14px;
    font-weight: ${p=>p.theme.fontWeights.regular};
    white-space: pre-wrap;

    cursor: pointer;
`;
export const ClearAll = styled.span`
    ${RightFloatingAction};
`;

export const Options = styled.ul`
    width: 100%;
    border-radius: 10px;

    z-index: 1;
    position: absolute;
    top: 101%;
    background-color: ${p => p.theme.colors.light};
    box-shadow: 0 0 10px 0 ${p => p.theme.colors.blackShadow};

    max-height: 40vh;
    overflow-y: auto;
`
export const Option = styled.div`
    padding: 13px 20px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: ${p => p.theme.colors.casablancaLighter};
        font-weight: ${p => p.theme.fontWeights.medium};
    }

    ${p => p.isSelected ? css`background-color: ${p => p.theme.colors.casablancaLight};` : ``}
`;
