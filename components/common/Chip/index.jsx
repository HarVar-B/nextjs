import React from "react";
import styled, {css} from "styled-components";
import theme from "@/theme";

const outlined = "outlined";
const block = "block";

export const ChipVariants = {
  outlined,
  block
}

const mapColor = {
  outlined: theme.colors.secondaryComp,
  block: theme.colors.dark,
}

const Chip = styled.div`
    margin: 0;
    width: fit-content;
    display: inline-block;
    height: 25px;

    border-radius: 40px;

    border: 1px solid ${p => p.color};

    padding: 4px 12px;

    font-size: 10px;
    line-height: 16px;
    font-weight: ${p => p.theme.fontWeights.medium};
    text-align: center;

    text-transform: uppercase;

    ${p => p.variant === block ? css`
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.color}
    ` : css`
        background-color: transparent;
        border: 1px solid ${p => p.color};
        color: ${p => p.color}
    `}
`;

function index({variant = outlined, color, label, ...props}) {
  return <Chip variant={variant} color={color || mapColor[variant]} {...props}>
    {label}
  </Chip>
}

export default index;
