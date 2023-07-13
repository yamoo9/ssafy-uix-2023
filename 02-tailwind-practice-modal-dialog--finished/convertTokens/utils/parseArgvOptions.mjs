import { argv } from 'node:process';
import {
  INPUT_PATH,
  OUTPUT_PATH,
  PRIMITIVES_COLLECTION,
  COLORS_TOKEN_NAME,
  SPACING_TOKEN_NAME,
  RADIUS_TOKEN_NAME,
  SHADOW_TOKEN_NAME,
} from '../config.mjs';

const ARGV = argv.slice(2);
const options = Object.fromEntries(
  ARGV.map((keyValue) => {
    const [key, value] = keyValue.split('=');
    return [key.replace(/-/g, ''), value];
  })
);

[
  ['input', INPUT_PATH],
  ['output', OUTPUT_PATH],
  ['primitives', PRIMITIVES_COLLECTION],
  ['semantics', null],
  ['colors', COLORS_TOKEN_NAME],
  ['spacing', SPACING_TOKEN_NAME],
  ['radius', RADIUS_TOKEN_NAME],
  ['shadow', SHADOW_TOKEN_NAME],
].forEach(([optionName, defaultValue]) => {
  if (!(optionName in options)) {
    options[optionName] = defaultValue;
  }
});

export default options;
