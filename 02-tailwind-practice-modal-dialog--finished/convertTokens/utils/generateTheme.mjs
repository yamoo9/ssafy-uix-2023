import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import getPath from './getPath.mjs';
import getTheme from './getTheme.mjs';
import options from './parseArgvOptions.mjs';

const theme = getTheme();

const generateTheme = () => {
  const lastSlashIndex = options.output.lastIndexOf('/');
  const outputDirPath = options.output.slice(0, lastSlashIndex + 1);

  if (!existsSync(getPath(outputDirPath))) {
    mkdirSync(outputDirPath, { recursive: true });
  }

  writeFileSync(
    getPath(options.output),
    `export default ${JSON.stringify(theme, null, 2)}`,
    { encoding: 'utf-8' }
  );
};

export default generateTheme;
