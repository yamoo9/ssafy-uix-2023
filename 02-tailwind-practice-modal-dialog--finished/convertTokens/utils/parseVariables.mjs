import { readFileSync } from 'node:fs';
import getPath from './getPath.mjs';
import options from './parseArgvOptions.mjs';

const OPTIONS = { encoding: 'utf-8' };

const parseVariables = (path) => {
  const json = readFileSync(getPath(options.input), OPTIONS);
  return JSON.parse(json);
};

export default parseVariables;
