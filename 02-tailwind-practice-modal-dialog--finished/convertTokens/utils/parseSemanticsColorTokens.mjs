import findToken from './findToken.mjs';
import options from './parseArgvOptions.mjs';

const parseSemanticsColorTokens = (primitivesColorTokens) => {
  if (!options.semantics) return {};

  const semantics = findToken(options.semantics);
  const colors = semantics.filter(({ type }) => type === 'color');
  const aliasColors = colors.filter(({ isAlias }) => isAlias);
  const colorTokenReg = new RegExp(`^${options.colors}/`);

  const colorTokens = {};

  aliasColors.forEach((color) => {
    let [colorKey, variant] = color.name.replace(colorTokenReg, '').split('/');
    let colorValue = color.value;

    if (colorValue.collection === options.primitives) {
      const [k, v] = colorValue.name.replace(colorTokenReg, '').split('/');
      colorTokens[colorKey] = colorTokens[colorKey] ?? {};
      colorTokens[colorKey][variant] = primitivesColorTokens[k][v];
    }
  });

  aliasColors.forEach((color) => {
    let [colorKey, variant] = color.name.replace(colorTokenReg, '').split('/');
    let colorValue = color.value;

    if (colorValue.collection === options.semantics) {
      const [k, v] = colorValue.name.replace(colorTokenReg, '').split('/');
      colorTokens[colorKey] = colorTokens[colorKey] ?? {};
      colorTokens[colorKey][variant] = colorTokens[k][v];
    }
  });

  return colorTokens;
};

export default parseSemanticsColorTokens;
