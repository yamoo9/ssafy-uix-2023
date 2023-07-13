import parseColorTokens from './parseColorTokens.mjs';
import parseRadiusTokens from './parseRadiusTokens.mjs';
import parseSpacingTokens from './parseSpacingTokens.mjs';
import parseShadowTokens from './parseShadowTokens.mjs';

const getTheme = () => {
  const colors = parseColorTokens();
  const spacing = parseSpacingTokens();
  const radius = parseRadiusTokens();
  const shadow = parseShadowTokens();

  return {
    colors,
    borderRadius: radius,
    spacing: spacing,
    boxShadow: shadow,
    dropShadow: shadow,
  };
};

export default getTheme;
