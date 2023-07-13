import findToken from './findToken.mjs';
import options from './parseArgvOptions.mjs';

const parseSpacingTokens = () => {
  const primitives = findToken(options.primitives);
  if (!primitives) return;
  const numberTokens = primitives.filter(({ type }) => type === 'number');
  const spacingTokens = {};

  numberTokens
    .filter(({ name }) => name.includes(options.spacing))
    .forEach(({ name, value }) => {
      const [, v] = name.split('/');
      spacingTokens[v] = `${value}px`;
    });

  return spacingTokens;
};

export default parseSpacingTokens;
