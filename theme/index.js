import colors from "./colors";
import typography,{fontWeights} from "./typography";

const theme = {
  colors: {
    primary: colors.hibiscus,
    secondary: colors.casablanca,
    tertiary: colors.niagara,
    primaryComp: colors.endeavour,
    secondaryComp: colors.amaranth,

    primaryLight: colors.hibiscusLight,
    tertiaryLight: colors.iceberg,

    light: colors.white,
    dark: colors.mineShaft,
    ...colors
  },
  typography,
  fontWeights
}

export default theme;
