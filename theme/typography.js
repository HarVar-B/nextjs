export const abrilFatface = "Abril Fatface";
export const poppins = "Poppins, sans-serif";

export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
}

const typography = {
  heading: {
    fontFamily: abrilFatface,
    fontWeight: fontWeights.regular,
    fontSize: '70px',
    lineHeight: '50px',
  },
  subHeading: {
    fontFamily: poppins,
    fontWeight: fontWeights.bold,
    fontSize: '22px',
    lineHeight: '30px',
    textTransform: 'capitalize',
  },
  caption: {
    fontFamily: poppins,
    fontWeight: fontWeights.semiBold,
    fontSize: '22px',
    lineHeight: '22px',
    textTransform: 'capitalize',
  },
  paragraph: {
    fontFamily: poppins,
    fontWeight: fontWeights.light,
    fontSize: '14px',
    lineHeight: '22px',
  },
};

export default typography
