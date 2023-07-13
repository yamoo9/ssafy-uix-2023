import parsePrimitivesColorTokens from './parsePrimitivesColorTokens.mjs';
import parseSemanticsColorTokens from './parseSemanticsColorTokens.mjs';

const parseColorTokens = () => {
  const primitivesColorTokens = parsePrimitivesColorTokens();
  const semanticsColorTokens = parseSemanticsColorTokens(primitivesColorTokens);
  return { ...primitivesColorTokens, ...semanticsColorTokens };
};

export default parseColorTokens;
