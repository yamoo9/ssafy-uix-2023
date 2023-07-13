import findToken from './findToken.mjs';
import options from './parseArgvOptions.mjs';

const parseRadiusTokens = () => {
  const primitives = findToken(options.primitives);
  if (!primitives) return;
  const numberTokens = primitives.filter(({ type }) => type === 'number');
  const radiusTokens = {};

  numberTokens
    .filter(({ name }) => name.includes(options.radius))
    .forEach(({ name, value }) => {
      const [, v] = name.split('/');
      radiusTokens[v] = `${value}px`;
    });

  return radiusTokens;
};

export default parseRadiusTokens;
