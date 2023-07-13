import findToken from './findToken.mjs';
import options from './parseArgvOptions.mjs';

const parsePrimitivesColorTokens = () => {
  const primitives = findToken(options.primitives);
  if (!primitives) return;
  const colors = primitives.filter(({ type }) => type === 'color');
  const colorTokenReg = new RegExp(`^${options.colors}/`);
  const colorTokens = {};

  const pureColors = colors.filter(({ isAlias }) => !isAlias);

  pureColors.forEach((color) => {
    let [colorKey, variant] = color.name.replace(colorTokenReg, '').split('/');
    let colorValue = color.value;

    if (variant) {
      colorTokens[colorKey] = colorTokens[colorKey] ?? {};
      colorTokens[colorKey][variant] = colorValue;
    } else {
      colorTokens[colorKey] = colorValue;
    }
  });

  return colorTokens;
};

export default parsePrimitivesColorTokens;
