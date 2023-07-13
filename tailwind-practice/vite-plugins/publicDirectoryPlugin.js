import { cwd } from 'node:process';

export default function publicDirectoryPlugin(publicDirName = 'public') {
  return {
    name: 'absolute-paths',
    config: () => ({
      root: cwd(),
      publicDir: publicDirName,
    }),
  };
}
