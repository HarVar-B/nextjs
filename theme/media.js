import {css} from 'styled-components'

export const device = {
  xs: 400,
  sm: 600,
  md: 900,
  mdLg: 1024,
  lg: 1280,
  xl: 1440,
  xxl: 1920,
}

export const media = {
  xs: (...args) => css`
      @media (max-width: ${device.xs}px) {
          ${css(...args)};
      }
  `,
  sm: (...args) => css`
      @media (max-width: ${device.sm}px) {
          ${css(...args)};
      }
  `,
  md: (...args) => css`
      @media (max-width: ${device.md}px) {
          ${css(...args)};
      }
  `,
  mdLg: (...args) => css`
      @media (max-width: ${device.mdLg}px) {
          ${css(...args)};
      }
  `,
  lg: (...args) => css`
      @media (max-width: ${device.lg}px) {
          ${css(...args)};
      }
  `,
  xl: (...args) => css`
      @media (max-width: ${device.xl}px) {
          ${css(...args)};
      }
  `,
  xxl: (...args) => css`
      @media (max-width: ${device.xxl}px) {
          ${css(...args)};
      }
  `,
}
