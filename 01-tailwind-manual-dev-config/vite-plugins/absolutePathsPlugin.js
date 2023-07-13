import { resolve } from 'node:path';
import { cwd } from 'node:process';

export default function absolutePathsPlugin(absRootDirName = 'src') {
  return {
    name: 'absolute-paths',
    config: () => ({
      resolve: {
        alias: {
          '@': resolve(cwd(), absRootDirName),
        },
      },
    }),
  };
}
