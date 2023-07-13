import { findEffectsToken } from './findToken.mjs';
import options from './parseArgvOptions.mjs';

const parseSpacingTokens = () => {
  const effectTokens = findEffectsToken();
  if (!effectTokens) return;
  const shadowTokens = {};

  effectTokens
    .filter(({ name }) => name.includes(options.shadow))
    .forEach(({ name, value }) => {
      const [, v] = name.split('/');

      const shadowValue = value.effects.reduce((shadowValue, shadowOptions) => {
        const { type, offset, radius: blur, spread, color } = shadowOptions;
        if (/(drop|inner)_shadow/i.test(type)) {
          const insetKey = type.toLowerCase().includes('inner') ? 'inset ' : '';
          const colorValue = `rgba(${color.r},${color.g},${color.b},${color.a})`;
          shadowValue += `${insetKey}${offset.x}px ${offset.y}px ${blur}px ${colorValue}, `;
          return shadowValue;
        } else {
          return '';
        }
      }, '');

      shadowTokens[v] = shadowValue.trim().slice(0, -1); // 마지막 콤마(,) 삭제
    });

  return shadowTokens;
};

export default parseSpacingTokens;
