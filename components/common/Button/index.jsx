import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    height: 40px;

    border-radius: 10px;
    border: none;
    padding: 10px 20px;
    background: transparent;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: ${p=>p.theme.fontWeights.regular};
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        box-shadow: 10px 10px 30px 0 ${p => p.theme.colors.blackShadow}
    }

    :disabled {
        cursor: not-allowed;
        color: ${p => p.theme.colors.silverChalice};
        background: ${p => p.theme.colors.silverChaliceLight};
        box-shadow: none;
    }
`;

function Index(props) {
  return <Button type='button' {...props} />;
}

export const PrimaryButton = styled(Index)`
    background: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.dark};
    font-weight: ${p=>p.theme.fontWeights.semiBold};
`;
export const PrimaryButtonV2 = styled(Index)`
    background: ${p => p.theme.colors.tertiary};
    color: ${p => p.theme.colors.light};
`;
export const SecondaryButton = styled(Index)`
    border: 1px solid ${p => p.theme.colors.tertiary};
    color: ${p => p.theme.colors.tertiary};

    &:hover {
        background: ${p => p.theme.colors.tertiary};
        color: ${p => p.theme.colors.light};
    }

    :disabled {
        background: transparent;
        border: 1px solid ${p => p.theme.colors.silverChalice};
    }
`;

export const DisabledButton = styled(Button)`
    cursor: not-allowed;
    color: ${p => p.theme.colors.silverChalice};
    background: ${p => p.theme.colors.silverChaliceLight};
    box-shadow: none;
`;
export default Index;
