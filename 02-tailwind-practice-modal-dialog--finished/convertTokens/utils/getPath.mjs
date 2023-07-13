import { resolve } from 'node:path';
import ROOT_DIR from './cwd.mjs';

const getPath = (path) => resolve(ROOT_DIR, path);

export default getPath;
